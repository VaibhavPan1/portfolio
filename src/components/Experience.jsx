import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="section-wrapper" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Professional Track Record</span>
          <h2 className="section-title">Enterprise Experience</h2>
          <p className="section-subtitle">
            Hands-on software engineering, resolving live production incidents, analyzing backend logs, and maintaining system reliability.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item, idx) => (
            <div className="experience-card" key={idx}>
              <div className="exp-top-bar">
                <div>
                  <h3 className="exp-role-title">{item.role}</h3>
                  <div className="exp-company-group">
                    <span>{item.company}</span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={13} /> {item.location}
                    </span>
                  </div>
                </div>
                <div className="exp-period-badge">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: '-1px' }} />
                  {item.period}
                </div>
              </div>

              <p className="exp-summary-text">{item.summary}</p>

              <ul className="exp-bullets-list">
                {item.highlights.map((bullet, bIdx) => (
                  <li className="exp-bullet-item" key={bIdx}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="tech-tags-group">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.5rem', fontWeight: 500 }}>
                  Stack & Tooling:
                </span>
                {item.technologies.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
