import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getNewsList } from '@/lib/microcms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsList = () => {
  const { t, i18n } = useTranslation();
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNews = async () => {
      try {
        const newsData = await getNewsList();
        setAllNews(newsData);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('pages.backToHome')}
          </Link>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold pb-4 border-b-4 border-primary">
              {t('newsList.title')}
            </h1>
          </div>

          {/* Loading State */}
          {loading && (
            <p className="text-center text-gray-500 py-12">{t('pages.loading')}</p>
          )}

          {/* News List */}
          {!loading && (
            <div className="divide-y divide-gray-200">
              {allNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group flex items-center justify-between py-5 hover:bg-gray-50 -mx-4 px-4 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-base font-bold text-primary">
                        {new Date(item.publishedAt).toLocaleDateString(i18n.language === 'ja' ? 'ja-JP' : 'en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        }).replace(/\//g, '.')}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        item.type === 'お知らせ' ? 'bg-blue-100 text-blue-700' :
                        item.type === 'アップデート' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.type === 'お知らせ' ? t('news.announcement') :
                         item.type === 'アップデート' ? t('news.update') :
                         (item.type || t('common.other'))}
                      </span>
                    </div>
                    <p className="text-gray-800 group-hover:text-primary transition-colors font-medium">
                      {item.title}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          )}

          {!loading && allNews.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              {t('newsList.empty')}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsList;
