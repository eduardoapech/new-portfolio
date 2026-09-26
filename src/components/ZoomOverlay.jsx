import React, { useEffect } from 'react';
import { assetUrl } from '../lib/assetUrl.js';

export default function ZoomOverlay({ src, onClose }) {
  useEffect(() => {
    if (!src) return;

    function onKeyDown(e) {
      if (e.key !== 'Escape') return;
      e.preventDefault();
      e.stopImmediatePropagation();
      onClose();
    }

    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div id="zoomOverlay" className="image-zoom-overlay" onClick={onClose}>
      <button type="button" className="zoom-close" onClick={onClose} aria-label="Fechar">
        ✕
      </button>
      <img id="zoomedImage" src={assetUrl(src)} alt="Zoom" />
    </div>
  );
}
