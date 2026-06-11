import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AppDetail from './components/AppDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import GeneralContact from './components/GeneralContact';
import GeneralPrivacy from './components/GeneralPrivacy';
import AppList from './components/AppList';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import NoticeDetail from './components/NoticeDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<GeneralContact />} />
          <Route path="/privacy" element={<GeneralPrivacy />} />
          <Route path="/apps" element={<AppList />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />
          <Route path="/notice/:slug" element={<NoticeDetail />} />
          <Route path="/app/:appSlug" element={<AppDetail />} />
          <Route path="/app/:appSlug/privacy" element={<PrivacyPolicy />} />
          <Route path="/app/:appSlug/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
