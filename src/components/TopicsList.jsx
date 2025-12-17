import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTopicsList } from '@/lib/microcms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TopicsList = () => {
  const [allTopics, setAllTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchTopics = async () => {
      try {
        const topicsData = await getTopicsList();
        setAllTopics(topicsData);
      } catch (error) {
        console.error('Failed to fetch topics:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold pb-4 border-b-4 border-primary">
              トピック一覧
            </h1>
          </div>

          {/* Loading State */}
          {loading && (
            <p className="text-center text-gray-500 py-12">読み込み中...</p>
          )}

          {/* Topics Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTopics.map((topic) => (
                <Link
                  key={topic.id}
                  to={`/topics/${topic.id}`}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    {topic.image?.url ? (
                      <img
                        src={topic.image.url}
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">
                        {topic.category || 'その他'}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(topic.publishedAt).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        }).replace(/\//g, '.')}
                      </span>
                    </div>
                    <h2 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {topic.title}
                    </h2>
                    {topic.description && (
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                        {topic.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && allTopics.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              トピックはまだありません。
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicsList;
