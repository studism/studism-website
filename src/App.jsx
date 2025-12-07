import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AppDetail from './components/AppDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import GeneralContact from './components/GeneralContact';
import GeneralPrivacy from './components/GeneralPrivacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<GeneralContact />} />
          <Route path="/privacy" element={<GeneralPrivacy />} />
          <Route path="/app/:appSlug" element={<AppDetail />} />
          <Route path="/app/:appSlug/privacy" element={<PrivacyPolicy />} />
          <Route path="/app/:appSlug/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
