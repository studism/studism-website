import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/studism-logo.png" alt="Studism" className="w-8 h-8" />
              <span className="text-xl font-bold">{t('common.siteName')}</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.apps')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/app/sakuraenglish" className="text-background/80 hover:text-background transition-colors">SakuraEnglish</Link></li>
              <li><Link to="/app/timelyze" className="text-background/80 hover:text-background transition-colors">Timelyze</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.companyInfo')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="text-background/80 hover:text-background transition-colors">{t('footer.aboutCompany')}</a></li>
              <li><a href="/#news" className="text-background/80 hover:text-background transition-colors">{t('header.news')}</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-background/80 hover:text-background transition-colors">{t('header.privacyPolicy')}</Link></li>
              <li><a href="/terms" className="text-background/80 hover:text-background transition-colors">{t('footer.terms')}</a></li>
              <li><Link to="/contact" className="text-background/80 hover:text-background transition-colors">{t('header.contact')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
