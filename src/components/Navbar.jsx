import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header className="navbar" style={{ borderColor: scrolled ? 'var(--border-medium)' : 'var(--border-subtle)' }}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#" className="brand-link" aria-label="Home">
            <div className="brand-logo">VP</div>
            <div className="brand-info">
              <span className="brand-name">{portfolioData.personal.name}</span>
              <span className="brand-role">Jr. SWE @ Cognizant</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs & Theme Controls */}
          <div className="nav-actions">
            <ThemeToggle />

            <button
              onClick={onOpenResume}
              className="btn btn-subtle"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.8125rem' }}
              aria-label="View Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>
            <button
              onClick={onOpenContact}
              className="btn btn-primary"
              style={{ padding: '0.45rem 0.95rem', fontSize: '0.8125rem' }}
              aria-label="Contact Vaibhav"
            >
              <Mail size={15} />
              <span>Contact</span>
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="mobile-nav-panel open">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
