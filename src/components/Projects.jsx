import { ExternalLink, Layers, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="section-wrapper" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Featured Engineering</span>
          <h2 className="section-title">High-Impact Systems & Projects</h2>
          <p className="section-subtitle">
            Curated backend microservices, cryptographic security pipelines, and distributed applications built for resilience.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div>
                <div className="project-header-top">
                  <span className="project-category">{project.category}</span>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn-link"
                        title="View Source on GitHub"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn-link"
                        title="View Live Demo"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-subtitle">{project.subtitle}</p>
                <p className="project-card-desc">{project.description}</p>

                {/* Key Architecture Metrics */}
                {project.metrics && (
                  <div className="project-metrics-row">
                    {project.metrics.map((m, mIdx) => (
                      <div className="metric-item" key={mIdx}>
                        <span className="metric-label">{m.label}</span>
                        <span className="metric-value">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Highlights */}
                <ul className="project-highlights-list">
                  {project.highlights.map((h, hIdx) => (
                    <li className="project-highlight-item" key={hIdx}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="tech-tags-group" style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                {project.technologies.map((tech) => (
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
