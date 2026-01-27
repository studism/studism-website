import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/studism-logo.png" alt="Studism" className="w-8 h-8" />
              <span className="text-xl font-bold">{t('common.siteName')}</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-semibold text-sm md:text-base">{t('footer.apps')}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/app/sakuraenglish" className="text-background/80 hover:text-background transition-colors">SakuraEnglish</Link></li>
              <li><Link to="/app/timelyze" className="text-background/80 hover:text-background transition-colors">Timelyze</Link></li>
              <li><Link to="/app/studism" className="text-background/80 hover:text-background transition-colors">Studism</Link></li>
              <li><Link to="/app/mamemame" className="text-background/80 hover:text-background transition-colors">豆マメ</Link></li>
              <li><Link to="/app/loopin" className="text-background/80 hover:text-background transition-colors">Loopin</Link></li>
            </ul>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-semibold text-sm md:text-base">{t('footer.companyInfo')}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><a href="/#about" className="text-background/80 hover:text-background transition-colors">{t('footer.aboutCompany')}</a></li>
              <li><a href="/#news" className="text-background/80 hover:text-background transition-colors">{t('header.news')}</a></li>
            </ul>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-semibold text-sm md:text-base">{t('footer.support')}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/privacy" className="text-background/80 hover:text-background transition-colors">{t('header.privacyPolicy')}</Link></li>
              <li><a href="/terms" className="text-background/80 hover:text-background transition-colors">{t('footer.terms')}</a></li>
              <li><Link to="/contact" className="text-background/80 hover:text-background transition-colors">{t('header.contact')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-background/60 text-xs md:text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
