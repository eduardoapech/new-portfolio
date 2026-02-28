import React from 'react';
import { scrollToSection } from '../lib/scroll.js';

export default function MobileMenu({ isOpen, onClose, lang, onToggleLang, labels }) {
  return (
    <div className={`mobile-menu${isOpen ? ' active' : ''}`} id="mobileMenu">
      <button className="close-menu" id="closeMenu" onClick={onClose}>
        ✕
      </button>

      <nav className="mobile-nav-links">
        <a
          href="#habilidades"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            scrollToSection('habilidades');
          }}
        >
          {labels.navSkills}
        </a>
        <a
          href="#projetos"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            scrollToSection('projetos');
          }}
        >
          {labels.navProjects}
        </a>
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            scrollToSection('contato');
          }}
        >
          {labels.navContact}
        </a>
      </nav>

      <button id="lang-switch-mobile" onClick={onToggleLang}>
        {lang === 'pt' ? 'EN' : 'PT'}
      </button>
    </div>
  );
}
