import React from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onCopyEmail, copied, onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        <div className="contact-banner">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="contact-banner-title">Let's build scalable systems together.</h2>
          <p className="contact-banner-desc">
            I am actively exploring Backend and Full Stack Software Engineering opportunities. Whether you have a challenging technical role or want to discuss architecture, my inbox is open.
          </p>

          <div className="contact-actions-row">
            <a href={`mailto:${personal.email}`} className="btn btn-primary">
              <Mail size={16} />
              <span>Send Direct Email</span>
            </a>
            <button
              onClick={() => onCopyEmail(personal.email)}
              className="btn btn-secondary"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>
            <button onClick={onOpenResume} className="btn btn-subtle" aria-label="View Resume">
              <FileText size={16} />
              <span>View Full Resume</span>
            </button>
          </div>

          <div className="contact-direct-info">
            <a href={`mailto:${personal.email}`} className="contact-info-link">
              <Mail size={14} style={{ color: 'var(--accent-primary)' }} />
              <span>{personal.email}</span>
            </a>
            <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="contact-info-link">
              <Phone size={14} style={{ color: 'var(--accent-primary)' }} />
              <span>{personal.phone}</span>
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="contact-info-link">
              <GithubIcon size={14} style={{ color: 'var(--accent-primary)' }} />
              <span>github.com/VaibhavPan1</span>
            </a>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} style={{ color: 'var(--accent-primary)' }} />
              <span>{personal.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
