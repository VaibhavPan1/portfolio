import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import { Check } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleCopyEmail = (email) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    } else {
      const el = document.createElement('textarea');
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    showToast(`Email copied: ${email}`);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Toast Notification */}
      {toast && (
        <div className="toast-container">
          <div className="toast">
            <Check size={16} style={{ color: '#10b981' }} />
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onCopyEmail={handleCopyEmail}
          copied={copied}
          onOpenContact={scrollToContact}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Professional Experience */}
        <Experience />

        {/* Featured High-Impact Projects */}
        <Projects />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Academic Foundation & Education */}
        <Education />

        {/* Contact Callout */}
        <ContactSection
          onCopyEmail={handleCopyEmail}
          copied={copied}
          onOpenResume={() => setResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onCopyEmail={handleCopyEmail}
        copied={copied}
      />
    </div>
  );
}
