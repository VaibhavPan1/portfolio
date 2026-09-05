import React from 'react';
import { ArrowRight, Copy, Check, ExternalLink, Briefcase, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onCopyEmail, copied, onOpenContact, onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section className="hero-section" id="about">
      <div className="container">
        {/* Status Pill */}
        <div className="hero-status-row">
          <div className="pill pill-active">
            <span className="pill-dot"></span>
            <span>{personal.availability}</span>
          </div>
          <div className="pill">
            <Briefcase size={13} style={{ color: 'var(--accent-primary)' }} />
            <span>Currently Jr. SWE at {personal.currentCompany}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Architecting resilient backend systems,
          <span className="hero-title-highlight">microservices & enterprise production stability.</span>
        </h1>

        {/* Professional Summary */}
        <p className="hero-summary">
          {personal.summary}
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>Explore High-Impact Work</span>
            <ArrowRight size={16} />
          </a>
          <a href="#experience" className="btn btn-secondary">
            <span>View Experience</span>
          </a>
          <button
            onClick={() => onCopyEmail(personal.email)}
            className="btn btn-subtle"
            aria-label="Copy email address"
          >
            {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>
        </div>

        {/* Key Engineering Credentials Strip */}
        <div className="hero-badges-strip">
          <div className="hero-badge-item">
            <Briefcase size={16} style={{ color: 'var(--accent-primary)' }} />
            <span>Enterprise: <strong>Cognizant (Jr. SWE)</strong></span>
          </div>
          <div className="hero-badge-item">
            <Award size={16} style={{ color: 'var(--accent-primary)' }} />
            <span>Education: <strong>B.Tech CSE (8.1 CGPA)</strong></span>
          </div>
          <div className="hero-badge-item">
            <MapPin size={16} style={{ color: 'var(--accent-primary)' }} />
            <span>Location: <strong>{personal.location}</strong></span>
          </div>
          <div className="hero-badge-item">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)' }}>{'</>'}</span>
            <span>Focus: <strong>Java, Spring Boot, React</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
