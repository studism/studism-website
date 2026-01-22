import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Footer from '../Footer';

const Company = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold text-white">{t('company.pageTitle')}</h1>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y">
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700 w-1/3">{t('company.companyName')}</th>
                      <td className="px-6 py-4 text-gray-800">{t('company.companyNameValue')}</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">{t('company.representative')}</th>
                      <td className="px-6 py-4 text-gray-800">{t('company.representativeValue')}</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">{t('company.established')}</th>
                      <td className="px-6 py-4 text-gray-800">{t('company.establishedValue')}</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">{t('company.location')}</th>
                      <td className="px-6 py-4 text-gray-800">{t('company.locationValue')}</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">{t('company.business')}</th>
                      <td className="px-6 py-4 text-gray-800">{t('company.businessValue')}</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">{t('company.contactLabel')}</th>
                      <td className="px-6 py-4 text-gray-800">
                        <a href="mailto:studism-hp@stdism.com" className="text-primary hover:underline">
                          studism-hp@stdism.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-12 text-center">
                <Link to="/about" className="text-primary hover:underline">
                  {t('company.backToAbout')}
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

export default Company;
