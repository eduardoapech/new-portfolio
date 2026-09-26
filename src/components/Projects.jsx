import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import { assetUrl } from '../lib/assetUrl.js';

export default function Projects({ subtitle, titleHtml, projects, getText, labels, onOpenModal }) {
  return (
    <section id="projetos" className="container section-padding">
      <SectionHeader subtitle={subtitle} titleHtml={titleHtml} />

      <div id="projectsGrid" className="projects-grid">
        {projects.map((p) => (
          <div className="project-card reveal" key={p.id}>
            <div className="project-img-box">
              <img
                src={assetUrl(p.img)}
                alt={p.title}
                style={{ objectPosition: p.imgPosition || 'center' }}
              />
            </div>
            <div className="project-info">
              <h3 style={{ color: 'var(--primary)', marginBottom: 10 }}>{p.title}</h3>
              <p
                style={{
                  color: '#cbd5e1',
                  fontSize: '0.85rem',
                  marginBottom: 20,
                  maxHeight: 72,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                dangerouslySetInnerHTML={{ __html: getText(p.summaryId || p.id) }}
              />

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.65rem',
                      background: 'rgba(225,6,19,0.12)',
                      color: 'var(--primary)',
                      padding: '4px 10px',
                      borderRadius: 6,
                      border: '1px solid rgba(225,6,19,0.35)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenModal(p.id);
                }}
                style={{
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                }}
              >
                {labels.viewDetails}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
