import { getArticleBySlug, getArticles, getStrapiImageUrl } from '@/lib/strapi';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const articles = await getArticles();
    return articles.map((a) => ({ slug: a.slug }));
  } catch {
    return [];
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const coverUrl = getStrapiImageUrl(article.cover);

  return (
    <div className="min-h-screen bg-brand-dark pt-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/#news"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-brand-yellow transition-colors mb-12"
        >
          ← Back to all news
        </Link>

        <div className="flex flex-wrap gap-3 items-center mb-6">
          {article.category && (
            <span className="text-xs font-medium tracking-widest uppercase bg-brand-yellow text-black px-2 py-1">
              {article.category.name}
            </span>
          )}
          <span className="text-xs text-white/30 uppercase tracking-widest">BLOG POST</span>
        </div>

        <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-6">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-xl text-white/50 leading-relaxed mb-8">{article.excerpt}</p>
        )}

        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
          {article.author && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-brand-yellow text-xs">
                  {article.author.name[0]}
                </span>
              </div>
              <span className="text-sm text-white/50">{article.author.name}</span>
            </div>
          )}
          <time className="text-sm text-white/30">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>

      {/* Cover image */}
      {coverUrl && (
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <img
            src={coverUrl}
            alt={article.title}
            className="w-full h-[400px] md:h-[520px] object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-32">
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-a:text-brand-yellow prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
}
