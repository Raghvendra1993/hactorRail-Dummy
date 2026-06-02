import Link from 'next/link';
import Image from 'next/image';
import { Article, getStrapiImageUrl } from '@/lib/strapi';

export default function ArticleCard({ article }: { article: Article }) {
  const coverUrl = getStrapiImageUrl(article.cover);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
    >
      {coverUrl && (
        <div className="relative w-full h-48">
          <Image
            src={coverUrl}
            alt={article.cover?.alternativeText || article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        {article.category && (
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {article.category.name}
          </span>
        )}
        <h2 className="text-lg font-semibold mt-1 line-clamp-2 leading-snug">
          {article.title}
        </h2>
        {article.excerpt && (
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">{article.excerpt}</p>
        )}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          {article.author && <span>By {article.author.name}</span>}
        </div>
      </div>
    </Link>
  );
}
