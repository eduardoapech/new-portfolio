import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { dailySkills, familiarSkills, personal, projects, socialLinks, translations } from './data/siteContent.js';
import { t } from './lib/i18n.js';
import { useRevealObserver } from './hooks/useRevealObserver.js';

import Header from './components/Header.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import BackToTop from './components/BackToTop.jsx';
import ZoomOverlay from './components/ZoomOverlay.jsx';

export default function App() {
  const [lang, setLang] = useState('pt');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [zoomSrc, setZoomSrc] = useState(null);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  const modalOpen = Boolean(activeProject);

  const labels = useMemo(
    () => ({
      navSkills: t(translations, lang, 'nav-skills'),
      navProjects: t(translations, lang, 'nav-projects'),
      navContact: t(translations, lang, 'nav-contact'),
      navHire: t(translations, lang, 'nav-hire'),

      btnWork: t(translations, lang, 'btn-work'),
      btnTalk: t(translations, lang, 'btn-talk'),

      viewDetails: t(translations, lang, 'view-details'),
      viewProject: t(translations, lang, 'view-project'),
      zoomHint: t(translations, lang, 'zoom-hint'),

      btnSend: t(translations, lang, 'btn-send'),
      btnSending: t(translations, lang, 'btn-sending'),

      alertSuccess: t(translations, lang, 'alert-success'),
      alertError: t(translations, lang, 'alert-error'),
      alertFallback: t(translations, lang, 'alert-fallback'),
    }),
    [lang]
  );

  const placeholders = useMemo(
    () => ({
      name: t(translations, lang, 'ph-name'),
      email: t(translations, lang, 'ph-email'),
      msg: t(translations, lang, 'ph-msg'),
    }),
    [lang]
  );

  const onToggleLang = useCallback(() => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  useRevealObserver([lang, modalOpen, isMobileMenuOpen]);

  return (
    <>
      <div id="custom-cursor"></div>

      <Header
        lang={lang}
        onToggleLang={onToggleLang}
        labels={labels}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        logoText="EP"
      />

      <main>
        <Hero
          badge={t(translations, lang, 'hero-badge')}
          titleHtml={t(translations, lang, 'hero-title')}
          desc={t(translations, lang, 'hero-desc')}
          labels={labels}
          profileImageSrc="/assets/image/meu-perfil-eduardo.jpg"
        />

        <Skills
          subtitle={t(translations, lang, 'skills-sub')}
          titleHtml={t(translations, lang, 'skills-title')}
          daily={dailySkills}
          also={familiarSkills}
          dailyLabel={t(translations, lang, 'skills-daily')}
          alsoLabel={t(translations, lang, 'skills-also')}
          getText={(key) => t(translations, lang, key)}
          getLevelText={(key) => t(translations, lang, key)}
        />

        <Projects
          subtitle={t(translations, lang, 'proj-sub')}
          titleHtml={t(translations, lang, 'proj-title')}
          projects={projects}
          getText={(key) => t(translations, lang, key)}
          labels={labels}
          onOpenModal={(id) => setActiveProjectId(id)}
        />

        <Contact
          titleHtml={t(translations, lang, 'contact-title')}
          desc={t(translations, lang, 'contact-desc')}
          labels={labels}
          placeholders={placeholders}
          personal={personal}
        />
      </main>

      <Footer
        footerText={
          lang === 'pt'
            ? `© ${new Date().getFullYear()} ${personal.name} | ${personal.role}. Todos os direitos reservados.`
            : `© ${new Date().getFullYear()} ${personal.name} | ${personal.role}. All rights reserved.`
        }
        socialLinks={socialLinks}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        lang={lang}
        onToggleLang={() => {
          onToggleLang();
          setIsMobileMenuOpen(false);
        }}
        labels={labels}
      />

      <ProjectModal
        isOpen={modalOpen}
        project={activeProject}
        descriptionHtml={activeProject ? t(translations, lang, activeProject.id) : ''}
        openProjectLabel={labels.viewProject}
        zoomHint={labels.zoomHint}
        getText={(key) => t(translations, lang, key)}
        onClose={() => {
          setActiveProjectId(null);
          setZoomSrc(null);
        }}
        onZoom={(src) => setZoomSrc(src)}
      />

      <ZoomOverlay src={zoomSrc} onClose={() => setZoomSrc(null)} />

      <BackToTop isHidden={modalOpen} />
    </>
  );
}
