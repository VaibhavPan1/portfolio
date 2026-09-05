import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onCopyEmail, copied }) {
  if (!isOpen) return null;

  const { personal, experience, projects, skills, education } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Curriculum Vitae</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Verified Resume Data • Vaibhav Kumar Pandey
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-subtle"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            fontSize: '0.875rem',
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--border-medium)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              {personal.name.toUpperCase()}
            </h1>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              {personal.role}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
              <span>{personal.phone}</span>
              <span>•</span>
              <a href={`mailto:${personal.email}`} style={{ color: 'var(--accent-primary)' }}>
                {personal.email}
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>
                github.com/VaibhavPan1
              </a>
              <span>•</span>
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
              Professional Summary
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              {personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
              Technical Skills
            </h4>
            <div style={{ display: 'grid', gap: '0.35rem', color: 'var(--text-secondary)' }}>
              <div><strong style={{ color: 'var(--text-primary)' }}>Languages:</strong> Java, SQL, Python, JavaScript</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Frameworks:</strong> Spring Boot, Spring Security, Spring MVC, React, Django, Node.js</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Databases:</strong> MySQL, PostgreSQL, MongoDB, SQL Server</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Tools & DevOps:</strong> Git, GitHub, GitLab, Docker, Postman, Jira, Linux</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Concepts:</strong> REST APIs, Microservices, OOP, DSA, DevOps, Production Debugging</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>AI Skills:</strong> Prompt Engineering, Claude, Codex, Antigravity</div>
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              Professional Experience
            </h4>
            {experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <span>{exp.role} | {exp.company}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem', color: 'var(--text-secondary)' }}>
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ marginBottom: '0.25rem', lineHeight: 1.5 }}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              Impactful Projects
            </h4>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  {proj.title}
                </div>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.3rem', color: 'var(--text-secondary)' }}>
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} style={{ marginBottom: '0.2rem', lineHeight: 1.5 }}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
              Education
            </h4>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{edu.institution}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>{edu.degree}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  {edu.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button onClick={onClose} className="btn btn-subtle">
            Close
          </button>
          <a href={`mailto:${personal.email}`} className="btn btn-primary">
            Contact Vaibhav
          </a>
        </div>
      </div>
    </div>
  );
}
