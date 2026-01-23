import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, Users, Zap } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const Philosophy = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t('philosophy.pageTitle')}</h1>
          </div>
        </section>

        {/* ミッション */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold text-primary mb-2">MISSION</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{t('philosophy.missionTitle')}</h2>
              <p className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">
                {t('philosophy.mission')}
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {t('philosophy.missionDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* ビジョン */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold text-primary mb-2">VISION</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{t('philosophy.visionTitle')}</h2>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-4">
                {t('philosophy.vision')}
              </p>
              <p className="text-gray-600 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {t('philosophy.visionDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* バリュー */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-primary mb-2">VALUES</p>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">{t('philosophy.valuesTitle')}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t('philosophy.value1Title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('philosophy.value1Desc')}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t('philosophy.value2Title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('philosophy.value2Desc')}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{t('philosophy.value3Title')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('philosophy.value3Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 戻るリンク */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <Link to="/about" className="text-primary hover:underline">
              {t('philosophy.backToAbout')}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Philosophy;
