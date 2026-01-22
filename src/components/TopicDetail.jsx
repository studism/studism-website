import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { getTopicById, getTopicsList } from '@/lib/microcms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TopicDetail = () => {
  const { topicId } = useParams();
  const { t, i18n } = useTranslation();
  const [topic, setTopic] = useState(null);
  const [relatedTopics, setRelatedTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const [topicData, topicsData] = await Promise.all([
          getTopicById(topicId),
          getTopicsList(4),
        ]);
        setTopic(topicData);
        setRelatedTopics(topicsData.filter(item => item.id !== topicId).slice(0, 3));

        // 閲覧数をインクリメント
        fetch('/api/views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: topicId }),
        }).catch(err => console.error('Failed to update views:', err));
      } catch (error) {
        console.error('Failed to fetch topic:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [topicId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center">
          <p className="text-gray-500">{t('topicDetail.loading')}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{t('topicDetail.notFound')}</h1>
          <Link to="/" className="text-primary hover:underline">
            {t('topicDetail.backToHome')}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('topicDetail.backToHome')}
          </Link>

          {/* Topic Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                {topic.category || t('topicDetail.other')}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {topic.title}
            </h1>
            <p className="mt-4 text-gray-600">{topic.description}</p>
          </div>

          {/* Topic Image */}
          {topic.image?.url && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={topic.image.url}
                alt={topic.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Topic Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-img:max-w-2xl prose-img:mx-auto prose-img:rounded-lg">
            {topic.content ? (
              <div dangerouslySetInnerHTML={{ __html: topic.content }} />
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {t('topicDetail.contentPreparing')}
              </p>
            )}
          </div>

          {/* Related Topics */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2">
              {t('topicDetail.relatedTopics')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedTopics.map((item) => (
                  <Link
                    key={item.id}
                    to={`/topics/${item.id}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image?.url || '/images/studism-logo.png'}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">{item.category || t('topicDetail.other')}</span>
                      <h3 className="font-bold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
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

export default TopicDetail;
