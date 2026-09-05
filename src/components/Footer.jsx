import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
            <span style={{ marginLeft: '0.5rem', color: 'var(--text-muted)' }}>
              Built with React & Vite
            </span>
          </div>

          <div className="footer-links">
            <a href={personal.github} target="_blank" rel="noreferrer" className="footer-link">
              GitHub
            </a>
            <a href={`mailto:${personal.email}`} className="footer-link">
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="footer-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-secondary)' }}
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
