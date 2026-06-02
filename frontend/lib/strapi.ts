const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  bio: string | null;
  avatar: StrapiImage | null;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  publishedAt: string;
  cover: StrapiImage | null;
  author: Author | null;
  category: Category | null;
}

interface StrapiListResponse<T> {
  data: T[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
}

async function fetchStrapi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`Strapi API error ${res.status}: ${res.statusText} — ${url}`);
  }
  return res.json();
}

export async function getArticles(): Promise<Article[]> {
  const res = await fetchStrapi<StrapiListResponse<Article>>(
    '/articles?populate=cover,author,category&sort=publishedAt:desc',
    { next: { revalidate: 60 } }
  );
  return res.data;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetchStrapi<StrapiListResponse<Article>>(
    `/articles?filters[slug][$eq]=${slug}&populate=cover,author,category`,
    { next: { revalidate: 60 } }
  );
  return res.data[0] ?? null;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetchStrapi<StrapiListResponse<Category>>('/categories');
  return res.data;
}

export function getStrapiImageUrl(image: StrapiImage | null): string | null {
  if (!image) return null;
  return image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
}
