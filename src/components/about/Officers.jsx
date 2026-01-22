import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Footer from '../Footer';

const Officers = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t('officers.pageTitle')}</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-500">{t('officers.preparing')}</p>
              <Link to="/about" className="text-primary hover:underline mt-8 inline-block">
                {t('officers.backToAbout')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Officers;
