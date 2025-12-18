import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

const AppsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const apps = [
    {
      slug: 'sakuraenglish',
      name: 'SakuraEnglish',
      icon: '/images/sakuraenglish.jpg',
      category: t('apps.sakuraenglish.category'),
      description: t('apps.sakuraenglish.description'),
      features: t('apps.sakuraenglish.features', { returnObjects: true }),
    },
    {
      slug: 'timelyze',
      name: 'Timelyze',
      icon: '/images/timelyze.png',
      category: t('apps.timelyze.category'),
      description: t('apps.timelyze.description'),
      features: t('apps.timelyze.features', { returnObjects: true }),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t('apps.title')}</h1>
            <p className="text-white/80 mt-2">{t('apps.description')}</p>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {apps.map((app) => (
                <Link
                  key={app.slug}
                  to={`/app/${app.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-20 h-20 rounded-2xl object-cover shadow-sm"
                      />
                      <div className="flex-1">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {app.category}
                        </span>
                        <h2 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                          {app.name}
                        </h2>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                          {app.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(app.features) && app.features.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <span className="text-primary text-sm font-medium group-hover:underline">
                        {t('common.learnMore')} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppsPage;
