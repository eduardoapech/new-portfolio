import React from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function Skills({
  subtitle,
  titleHtml,
  daily,
  also,
  dailyLabel,
  alsoLabel,
  getText,
  getLevelText,
}) {
  return (
    <section id="habilidades" className="container section-padding">
      <SectionHeader subtitle={subtitle} titleHtml={titleHtml} />

      <div className="skills-board">
        <p className="skills-label">{dailyLabel}</p>
        <div className="skills-grid" id="skillsGrid">
          {daily.map((s) => (
            <div className="skill-card reveal" key={s.id}>
              <div className="skill-card-top">
                <h3>{s.name}</h3>
                <div className="skill-badge">{getLevelText(s.level)}</div>
              </div>
              <p>{getText(s.id)}</p>
            </div>
          ))}
        </div>

        <div className="skills-also">
          <p className="skills-label">{alsoLabel}</p>
          <div className="skill-pills">
            {also.map((name) => (
              <span className="skill-pill" key={name}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
