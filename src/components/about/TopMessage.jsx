import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Footer from '../Footer';

const TopMessage = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t('topMessage.pageTitle')}</h1>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* メインメッセージ */}
              <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
                {t('topMessage.mainMessage')}
              </h2>

              <div className="space-y-8 text-gray-700 leading-relaxed text-center">
                <p style={{ whiteSpace: 'pre-line' }}>
                  {t('topMessage.paragraph1')}
                </p>

                <p style={{ whiteSpace: 'pre-line' }}>
                  {t('topMessage.paragraph2')}
                </p>

                <p style={{ whiteSpace: 'pre-line' }}>
                  {t('topMessage.paragraph3')}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4">
                    {t('topMessage.appDescription1')}
                  </p>
                  <p className="mb-4">
                    {t('topMessage.appDescription2')}
                  </p>
                  <p>
                    {t('topMessage.appDescription3')}
                  </p>
                </div>

                <p className="font-medium text-gray-800" style={{ whiteSpace: 'pre-line' }}>
                  {t('topMessage.keyMessage')}
                </p>

                <p style={{ whiteSpace: 'pre-line' }}>
                  {t('topMessage.paragraph4')}
                </p>

                <p style={{ whiteSpace: 'pre-line' }}>
                  {t('topMessage.paragraph5')}
                </p>

                <div className="text-center pt-8 border-t">
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-3">
                    {t('topMessage.closing1')}
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-3">
                    {t('topMessage.closing2')}
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
                    {t('topMessage.closing3')}
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-primary">
                    Studism
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/about" className="text-primary hover:underline">
                  {t('topMessage.backToAbout')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TopMessage;
