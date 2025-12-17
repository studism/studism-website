import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GeneralContact = () => {
  const { t } = useTranslation();

  // ページ読み込み時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const endpoint = import.meta.env.VITE_CONTACT_FORM_URL || import.meta.env.VITE_CONTACT_API_URL;
    if (!endpoint) {
      setSubmitStatus({ type: 'error', message: t('contact.noEndpoint') });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: t('contact.successMessage') });
        setFormData({ name: '', email: '', category: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || t('contact.errorMessage') });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus({ type: 'error', message: t('contact.networkError') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const noticeItems = t('contact.noticeItems', { returnObjects: true });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Send className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold">{t('contact.title')}</h1>
              <p className="text-muted-foreground">
                {t('contact.description')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>{t('contact.formTitle')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.name')} <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.namePlaceholder')}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')} <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.emailPlaceholder')}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">{t('contact.category')} <span className="text-destructive">*</span></Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)} required>
                    <SelectTrigger id="category" name="category" autoComplete="off" aria-required="true">
                      <SelectValue placeholder={t('contact.categoryPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{t('contact.categoryGeneral')}</SelectItem>
                      <SelectItem value="app_support">{t('contact.categoryAppSupport')}</SelectItem>
                      <SelectItem value="business">{t('contact.categoryBusiness')}</SelectItem>
                      <SelectItem value="media">{t('contact.categoryMedia')}</SelectItem>
                      <SelectItem value="privacy">{t('contact.categoryPrivacy')}</SelectItem>
                      <SelectItem value="other">{t('contact.categoryOther')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')} <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.messagePlaceholder')}
                    rows={6}
                    autoComplete="off"
                    required
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <h3 className="font-medium flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>{t('contact.privacyNotice')}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.privacyNoticeText')}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link to="/privacy">
                      {t('contact.checkPrivacy')}
                    </Link>
                  </Button>
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{t('contact.notice')}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {Array.isArray(noticeItems) && noticeItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="text-center">
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('contact.backToHome')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeneralContact;
