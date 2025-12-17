import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ja from './locales/ja.json';
import en from './locales/en.json';

// ブラウザの言語設定から初期言語を取得（日本語がデフォルト）
const getBrowserLanguage = () => {
  const savedLang = localStorage.getItem('language');
  if (savedLang) return savedLang;

  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'en' ? 'en' : 'ja';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: ja },
      en: { translation: en }
    },
    lng: getBrowserLanguage(),
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
