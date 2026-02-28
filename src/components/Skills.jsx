import React from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function Skills({ subtitle, titleHtml, skills, getText, getLevelText }) {
  return (
    <section id="habilidades" className="container section-padding">
      <SectionHeader subtitle={subtitle} titleHtml={titleHtml} />
      <div className="skills-grid" id="skillsGrid">
        {skills.map((s) => (
          <div className="skill-card reveal" key={s.id}>
            <div className="skill-badge">{getLevelText(s.level)}</div>
            <h3>{s.name}</h3>
            <p>{getText(s.id)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
