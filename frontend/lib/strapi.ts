const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// ─── Shared Types ─────────────────────────────────────────────────────────────

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

interface StrapiListResponse<T> {
  data: T[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
}

interface StrapiSingleResponse<T> {
  data: T | null;
  meta: Record<string, unknown>;
}

// ─── Article Types ────────────────────────────────────────────────────────────

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

// ─── Homepage Collection Types ────────────────────────────────────────────────

export interface Stat {
  id: number;
  documentId: string;
  value: string;
  label: string;
  sub: string | null;
  order: number;
}

export interface Service {
  id: number;
  documentId: string;
  tag: string;
  title: string;
  desc: string;
  features: string[] | null;
  order: number;
}

export interface CargoType {
  id: number;
  documentId: string;
  name: string;
  icon: string | null;
  desc: string | null;
  order: number;
}

export interface Principle {
  id: number;
  documentId: string;
  number: string | null;
  title: string;
  desc: string | null;
  order: number;
}

export interface Testimonial {
  id: number;
  documentId: string;
  quote: string;
  author: string;
  role: string | null;
  company: string | null;
  order: number;
}

export interface JobOpening {
  id: number;
  documentId: string;
  title: string;
  location: string | null;
  employmentType: 'Full-time' | 'Part-time' | 'Contract';
  description: string | null;
  applyUrl: string | null;
  isActive: boolean;
  order: number;
}

// ─── Single Type Interfaces ───────────────────────────────────────────────────

export interface HeroData {
  id: number;
  documentId: string;
  headline1: string | null;
  headline2: string | null;
  headline3: string | null;
  subtitle: string | null;
  cta1Text: string | null;
  cta1Link: string | null;
  cta2Text: string | null;
  cta2Link: string | null;
  backgroundImage: StrapiImage | null;
}

export interface SiteSettings {
  id: number;
  documentId: string;
  siteTitle: string | null;
  siteDescription: string | null;
  companyDescription: string | null;
  addressSe: string | null;
  addressDe: string | null;
  email: string | null;
  phone: string | null;
  contactResponseTime: string | null;
  socialLinkedIn: string | null;
  socialTwitter: string | null;
  socialFacebook: string | null;
  careerBenefits: string[] | null;
}

export interface SustainabilityData {
  id: number;
  documentId: string;
  heading: string | null;
  body1: string | null;
  body2: string | null;
  reportLabel: string | null;
  reportUrl: string | null;
  metrics: Array<{ value: string; label: string; sub: string }> | null;
}

// ─── Core Fetch ───────────────────────────────────────────────────────────────

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

// Single types return 404 when no content has been saved yet — treat as null
async function fetchStrapiSingle<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Strapi API error ${res.status}: ${res.statusText} — ${url}`);
  }
  const json: StrapiSingleResponse<T> = await res.json();
  return json.data ?? null;
}

const ISR = { next: { revalidate: 60 } };

// ─── Article Queries ──────────────────────────────────────────────────────────

export async function getArticles(): Promise<Article[]> {
  const res = await fetchStrapi<StrapiListResponse<Article>>(
    '/articles?populate[0]=cover&populate[1]=author&populate[2]=category&sort=publishedAt:desc',
    ISR
  );
  return res.data;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetchStrapi<StrapiListResponse<Article>>(
    `/articles?filters[slug][$eq]=${slug}&populate[0]=cover&populate[1]=author&populate[2]=category`,
    ISR
  );
  return res.data[0] ?? null;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetchStrapi<StrapiListResponse<Category>>('/categories', ISR);
  return res.data;
}

// ─── Homepage Collection Queries ──────────────────────────────────────────────

export async function getStats(): Promise<Stat[]> {
  const res = await fetchStrapi<StrapiListResponse<Stat>>(
    '/stats?sort=order:asc&pagination[pageSize]=25', ISR
  );
  return res.data;
}

export async function getServices(): Promise<Service[]> {
  const res = await fetchStrapi<StrapiListResponse<Service>>(
    '/services?sort=order:asc&pagination[pageSize]=25', ISR
  );
  return res.data;
}

export async function getCargoTypes(): Promise<CargoType[]> {
  const res = await fetchStrapi<StrapiListResponse<CargoType>>(
    '/cargo-types?sort=order:asc&pagination[pageSize]=25', ISR
  );
  return res.data;
}

export async function getPrinciples(): Promise<Principle[]> {
  const res = await fetchStrapi<StrapiListResponse<Principle>>(
    '/principles?sort=order:asc&pagination[pageSize]=25', ISR
  );
  return res.data;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const res = await fetchStrapi<StrapiListResponse<Testimonial>>(
    '/testimonials?sort=order:asc&pagination[pageSize]=25', ISR
  );
  return res.data;
}

export async function getJobOpenings(): Promise<JobOpening[]> {
  const res = await fetchStrapi<StrapiListResponse<JobOpening>>(
    '/job-openings?filters[isActive][$eq]=true&sort=order:asc&pagination[pageSize]=25', ISR
  );
  return res.data;
}

// ─── Single Type Queries ──────────────────────────────────────────────────────

export async function getHero(): Promise<HeroData | null> {
  return fetchStrapiSingle<HeroData>('/hero?populate[0]=backgroundImage', ISR);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return fetchStrapiSingle<SiteSettings>('/site-setting', ISR);
}

export async function getSustainabilitySection(): Promise<SustainabilityData | null> {
  return fetchStrapiSingle<SustainabilityData>('/sustainability-section', ISR);
}

// ─── Utility ──────────────────────────────────────────────────────────────────

export function getStrapiImageUrl(image: StrapiImage | null | undefined): string | null {
  if (!image) return null;
  return image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
}
