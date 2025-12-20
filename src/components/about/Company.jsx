import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Company = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">会社概要</h1>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y">
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700 w-1/3">会社名</th>
                      <td className="px-6 py-4 text-gray-800">Studism</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">代表者</th>
                      <td className="px-6 py-4 text-gray-800">横田直紀 / 田邊光希 / 荒木智也 / 藤井翼 / 森下勇莉</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">設立</th>
                      <td className="px-6 py-4 text-gray-800">2025年8月</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">所在地</th>
                      <td className="px-6 py-4 text-gray-800">東京都世田谷区北沢</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">事業内容</th>
                      <td className="px-6 py-4 text-gray-800">教育アプリの企画・開発・運営</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 bg-gray-50 text-left font-medium text-gray-700">連絡先</th>
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
                  ← 企業情報に戻る
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
