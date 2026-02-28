import React, { useEffect, useMemo, useRef, useState } from 'react';
import { assetUrl } from '../lib/assetUrl.js';

export default function ProjectModal({
  isOpen,
  project,
  descriptionHtml,
  onClose,
  onZoom,
  openProjectLabel,
}) {
  const galleryRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const images = useMemo(() => project?.gallery ?? [], [project]);

  function updateArrows() {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    setShowLeft(gallery.scrollLeft > 10);
    setShowRight(gallery.scrollLeft < maxScroll - 10);
  }

  function scrollGallery(direction) {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const scrollAmount = gallery.clientWidth;
    gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    window.setTimeout(updateArrows, 300);
  }

  useEffect(() => {
    if (!isOpen) return;
    const gallery = galleryRef.current;
    if (gallery) gallery.scrollLeft = 0;
    const timeoutId = window.setTimeout(updateArrows, 10);
    return () => window.clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, project?.id, images.length]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      id="projectModal"
      className={`project-modal${isOpen ? ' active' : ''}`}
      onClick={(e) => {
        if (e.target?.id === 'projectModal') onClose();
      }}
    >
      <div className="modal-content">
        <button id="closeModal" className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div id="modalBody">
          <h2 style={{ color: 'var(--primary)', marginBottom: 10 }}>{project.title}</h2>
          <p style={{ color: '#cbd5e1', marginBottom: 15 }} dangerouslySetInnerHTML={{ __html: descriptionHtml }} />

          {project.link ? (
            <div style={{ marginBottom: 18 }}>
              <a
                className="btn btn-primary"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                {openProjectLabel}
              </a>
            </div>
          ) : null}

          <div className="gallery-wrapper">
            <button
              className="nav-arrow left"
              id="prevBtn"
              style={{ display: showLeft ? 'block' : 'none' }}
              onClick={() => scrollGallery(-1)}
            >
              ❮
            </button>

            <div className="modal-gallery" id="modalGallery" ref={galleryRef} onScroll={updateArrows}>
              {images.map((img) => (
                <img
                  key={`${project.id}-${img}`}
                  src={assetUrl(img)}
                  alt="Screenshot"
                  onClick={() => {
                    if (window.innerWidth <= 768) onZoom(img);
                  }}
                />
              ))}
            </div>

            <button
              className="nav-arrow right"
              id="nextBtn"
              style={{ display: showRight ? 'block' : 'none' }}
              onClick={() => scrollGallery(1)}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
