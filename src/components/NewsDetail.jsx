import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getNewsById, news } from '@/data/news';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsDetail = () => {
  const { newsId } = useParams();
  const article = getNewsById(newsId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">記事が見つかりません</h1>
          <Link to="/" className="text-primary hover:underline">
            トップページに戻る
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/#news"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            ニュース一覧に戻る
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-500 font-mono">{article.date}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                article.type === 'お知らせ' ? 'bg-blue-100 text-blue-700' :
                article.type === 'アップデート' ? 'bg-green-100 text-green-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {article.type}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {article.title}
            </h1>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg border p-6 md:p-8">
              {article.content.split('\n').map((line, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Related News */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2">
              その他のニュース
            </h2>
            <div className="space-y-4">
              {news
                .filter(item => item.id !== newsId)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="flex flex-wrap items-center gap-2 md:gap-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.type === 'お知らせ' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'アップデート' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-gray-800 hover:text-primary">{item.title}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
