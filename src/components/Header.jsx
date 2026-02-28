import React from 'react';
import { scrollToSection } from '../lib/scroll.js';

export default function Header({
  lang,
  onToggleLang,
  labels,
  onOpenMobileMenu,
  logoText = 'EP',
}) {
  return (
    <header id="header">
      <div className="nav-floating">
        <a
          href="#hero"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          {logoText}
        </a>

        <div className="nav-links">
          <a
            href="#habilidades"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('habilidades');
            }}
          >
            {labels.navSkills}
          </a>
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projetos');
            }}
          >
            {labels.navProjects}
          </a>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contato');
            }}
          >
            {labels.navContact}
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <button id="lang-switch" onClick={onToggleLang}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            onClick={onOpenMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <a
            href="#contato"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contato');
            }}
          >
            {labels.navHire}
          </a>
        </div>
      </div>
    </header>
  );
}
