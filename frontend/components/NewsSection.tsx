import Link from 'next/link';
import { getStrapiImageUrl, type Article } from '@/lib/strapi';

function ArticleCard({ article }: { article: Article }) {
  const coverUrl = getStrapiImageUrl(article.cover);
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block bg-brand-near-black border border-white/10 hover:border-brand-yellow/30 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 bg-brand-dark overflow-hidden">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-near-black to-brand-dark">
            <span className="text-white/10 font-display font-black text-4xl uppercase">HR</span>
          </div>
        )}
        {article.category && (
          <span className="absolute top-4 left-4 text-xs font-medium tracking-widest uppercase bg-brand-yellow text-black px-2 py-1">
            {article.category.name}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-3">BLOG POST</p>
        <h3 className="font-display font-bold text-white text-lg leading-tight mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm text-white/50 leading-relaxed line-clamp-3 mb-4">{article.excerpt}</p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <time className="text-xs text-white/30">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </time>
          {article.author && (
            <span className="text-xs text-white/30">{article.author.name}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function NewsSection({ articles = [] }: { articles?: Article[] }) {
  const items = articles.slice(0, 3);

  return (
    <section id="news" className="bg-brand-dark py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="section-label">Latest News</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-tight">
              From the<br />
              <span className="text-white/30">Tracks.</span>
            </h2>
          </div>
          <Link
            href="#news"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-white/40 hover:text-brand-yellow transition-colors"
          >
            View all articles <span>→</span>
          </Link>
        </div>

        {items.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="border border-white/10 p-12 text-center">
            <p className="text-white/30 text-sm mb-2">No articles published yet.</p>
            <p className="text-white/20 text-xs">
              Add articles in the{' '}
              <a href="http://localhost:1337/admin" target="_blank" rel="noopener noreferrer" className="text-brand-yellow underline">
                Strapi Admin
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
