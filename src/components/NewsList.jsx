import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getSortedNews } from '@/data/news';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsList = () => {
  const allNews = getSortedNews();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-8 border-b-2 border-primary pb-4">
            ニュース一覧
          </h1>

          {/* News List */}
          <div className="space-y-4">
            {allNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="block py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.type === 'お知らせ' ? 'bg-blue-100 text-blue-700' :
                    item.type === 'アップデート' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.type}
                  </span>
                </div>
                <p className="mt-2 text-gray-800 hover:text-primary">{item.title}</p>
              </Link>
            ))}
          </div>

          {allNews.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              ニュースはまだありません。
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsList;
