import React from 'react';
import { Code2, Server, Database, Wrench, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="section-wrapper" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Technical Capabilities</span>
          <h2 className="section-title">Skills & Tooling Matrix</h2>
          <p className="section-subtitle">
            Core strengths in backend engineering, distributed microservices, relational data modeling, and modern developer tooling.
          </p>
        </div>

        <div className="skills-matrix">
          {/* Languages */}
          <div className="skill-category-card">
            <h3 className="skill-category-title">
              <Code2 size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Languages</span>
            </h3>
            <div className="skill-items-container">
              {skills.languages.map((lang) => (
                <div className="skill-row" key={lang.name}>
                  <span className="skill-name">{lang.name}</span>
                  <span className={`skill-badge ${lang.badge ? 'skill-badge-primary' : ''}`}>
                    {lang.level} {lang.badge && `• ${lang.badge}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="skill-category-card">
            <h3 className="skill-category-title">
              <Server size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Frameworks & Libraries</span>
            </h3>
            <div className="skill-items-container">
              {skills.frameworks.map((fw) => (
                <div className="skill-row" key={fw.name}>
                  <span className="skill-name">{fw.name}</span>
                  <span className="skill-badge">{fw.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category-card">
            <h3 className="skill-category-title">
              <Database size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Databases & Storage</span>
            </h3>
            <div className="skill-items-container">
              {skills.databases.map((db) => (
                <div className="skill-row" key={db.name}>
                  <span className="skill-name">{db.name}</span>
                  <span className="skill-badge">{db.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="skill-category-card">
            <h3 className="skill-category-title">
              <Wrench size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>DevOps & Tools</span>
            </h3>
            <div className="concept-chip-container">
              {skills.toolsAndDevops.map((tool) => (
                <div className="concept-chip" key={tool.name}>
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div className="skill-category-card">
            <h3 className="skill-category-title">
              <Cpu size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Core Concepts & Practices</span>
            </h3>
            <div className="concept-chip-container">
              {skills.coreConcepts.map((concept) => (
                <div className="concept-chip" key={concept}>
                  {concept}
                </div>
              ))}
            </div>
          </div>

          {/* AI Tooling & Acceleration */}
          <div className="skill-category-card">
            <h3 className="skill-category-title">
              <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>AI Skills & Workflow</span>
            </h3>
            <div className="concept-chip-container">
              {skills.aiSkills.map((ai) => (
                <div className="concept-chip" key={ai}>
                  {ai}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
