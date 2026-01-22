import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { getNewsById, getNewsList } from '@/lib/microcms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsDetail = () => {
  const { newsId } = useParams();
  const { t, i18n } = useTranslation();
  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const [articleData, newsData] = await Promise.all([
          getNewsById(newsId),
          getNewsList(6),
        ]);
        setArticle(articleData);
        setRelatedNews(newsData.filter(item => item.id !== newsId).slice(0, 5));
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [newsId]);

  // シェアURL
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = article?.title || '';

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center">
          <p className="text-gray-500">{t('newsDetail.loading')}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{t('newsDetail.notFound')}</h1>
          <Link to="/" className="text-primary hover:underline">
            {t('newsDetail.backToHome')}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="py-8 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Back Link */}
          <Link
            to="/#news"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('newsDetail.backToNews')}
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="flex-1">
              {/* Article Header */}
              <div className="pb-6 border-b">
                <div className="border-l-4 border-primary pl-4">
                  {/* Date and Category Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {new Date(article.publishedAt).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                      }).replace(/\//g, '.')}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded ${
                      article.type === 'お知らせ' ? 'bg-blue-100 text-blue-700' :
                      article.type === 'アップデート' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {article.type || 'その他'}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {article.title}
                  </h1>
                </div>
              </div>

              {/* Eyecatch Image */}
              {article.image?.url && (
                <div className="py-6">
                  <img
                    src={article.image.url}
                    alt={article.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              {/* Share Buttons */}
              <div className="py-4 border-b">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{t('newsDetail.shareArticle')}</span>
                  <div className="flex gap-2">
                    {/* X (Twitter) */}
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-black text-white rounded hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-[#1877F2] text-white rounded hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    {/* LINE */}
                    <a
                      href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-[#00B900] text-white rounded hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="py-6">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-img:max-w-2xl prose-img:mx-auto prose-img:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-4">
                {/* Sidebar Header */}
                <div className="border-t-4 border-primary">
                  <h2 className="text-lg font-bold text-primary text-center py-4">
                    {t('newsDetail.latestArticles')}
                  </h2>
                </div>

                {/* News List */}
                <div className="divide-y">
                  {relatedNews.map((item) => (
                    <Link
                      key={item.id}
                      to={`/news/${item.id}`}
                      className="flex gap-3 p-4 hover:bg-gray-50 transition-colors"
                    >
                      {/* Thumbnail */}
                      <div className="flex-shrink-0 w-20 h-14 bg-gray-100 rounded overflow-hidden">
                        {item.image?.url ? (
                          <img
                            src={item.image.url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                            <span className="text-xs text-gray-400">{t('newsDetail.noImage')}</span>
                          </div>
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(item.publishedAt).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'ja-JP', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }).replace(/\//g, '.')}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
