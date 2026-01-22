import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const { appSlug } = useParams();
  const { t } = useTranslation();

  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appSlug]);

  const appNames = {
    sakuraenglish: 'SakuraEnglish',
    timelyze: 'Timelyze'
  };

  const appName = appNames[appSlug] || t('common.other');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/images/studism-logo.png" alt="Studism" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">Studism</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">{appName} {t('privacy.title')}</h1>
              <p className="text-muted-foreground">
                {t('privacy.description')}
              </p>
            </div>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.appIntro', { appName })}
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">{t('privacy.section1Title')}</h2>
                    <p className="text-muted-foreground mb-4">{t('privacy.section1Intro')}</p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">{t('privacy.section1aTitle')}</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          {t('privacy.section1aItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">{t('privacy.section1bTitle')}</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          {t('privacy.section1bItems', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">{t('privacy.section2Title')}</h2>
                    <p className="text-muted-foreground mb-4">{t('privacy.section2Intro')}</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      {t('privacy.section2Items', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">{t('privacy.section3Title')}</h2>
                    <p className="text-muted-foreground">
                      {t('privacy.section3Text')}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">{t('privacy.section4Title')}</h2>
                    <p className="text-muted-foreground">
                      {t('privacy.section4Text')}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">{t('privacy.section6Title')}</h2>
                    <p className="text-muted-foreground">
                      {t('privacy.section6Text')}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">{t('privacy.section7Title')}</h2>
                    <p className="text-muted-foreground mb-4">
                      {t('privacy.section7Text')}
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-medium">{t('privacy.companyName')}</p>
                      <Button variant="link" className="p-0 h-auto" asChild>
                        <Link to={`/app/${appSlug}/contact`}>
                          {t('privacy.contactForm')}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm text-muted-foreground">{t('privacy.establishedDate')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to={`/app/${appSlug}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('appContact.backToApp', { appName })}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Studism</span>
            </div>
            <p className="text-background/60 text-sm">
              © 2025 Studism Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

