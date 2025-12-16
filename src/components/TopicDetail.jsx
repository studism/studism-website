import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTopicById, getLatestTopics, getPopularTopics } from '@/data/topics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TopicDetail = () => {
  const { topicId } = useParams();
  const topic = getTopicById(topicId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!topic) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">トピックが見つかりません</h1>
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
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページに戻る
          </Link>

          {/* Topic Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                {topic.category}
              </span>
              <span className="text-sm text-gray-400">{topic.views.toLocaleString()} views</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {topic.title}
            </h1>
            <p className="mt-4 text-gray-600">{topic.description}</p>
          </div>

          {/* Topic Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Topic Content Placeholder */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg border p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">
                このトピックの詳細コンテンツは準備中です。
              </p>
            </div>
          </div>

          {/* Related Topics */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2">
              関連トピック
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {getPopularTopics(3)
                .filter(item => item.id !== topicId)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/topics/${item.id}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">{item.category}</span>
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
