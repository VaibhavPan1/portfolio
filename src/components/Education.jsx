import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="section-wrapper" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Academic Foundation</span>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Formal computer science education emphasizing algorithms, operating systems, database management, and software design principles.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((edu, idx) => (
            <div className="education-card" key={idx}>
              <div className="edu-header-row">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                </div>
                <span className="edu-score-badge">{edu.score}</span>
              </div>

              <div className="edu-location-row">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginRight: '0.85rem' }}>
                  <MapPin size={12} /> {edu.location}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Calendar size={12} /> {edu.period}
                </span>
              </div>

              <ul className="edu-highlights-list">
                {edu.highlights.map((item, hIdx) => (
                  <li className="edu-highlight-item" key={hIdx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
