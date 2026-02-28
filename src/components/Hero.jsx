import React from 'react';
import { htmlString } from '../lib/i18n.js';
import { scrollToSection } from '../lib/scroll.js';
import { assetUrl } from '../lib/assetUrl.js';

export default function Hero({ titleHtml, badge, desc, labels, profileImageSrc }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="badge-hero reveal">{badge}</span>
          <h1 className="hero-title reveal" dangerouslySetInnerHTML={htmlString(titleHtml)} />
          <p className="hero-desc reveal">{desc}</p>
          <div className="hero-cta reveal">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projetos')}
            >
              {labels.btnWork}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contato')}
            >
              {labels.btnTalk}
            </button>
          </div>
        </div>

        <div className="hero-image-box reveal">
          <img src={assetUrl(profileImageSrc)} alt="Profile" className="hero-profile-img" />
        </div>
      </div>
    </section>
  );
}
