import React from 'react';
import { assetUrl } from '../lib/assetUrl.js';

export default function ZoomOverlay({ src, onClose }) {
  return (
    <div
      id="zoomOverlay"
      style={{ display: src ? 'flex' : 'none' }}
      className="image-zoom-overlay"
      onClick={onClose}
    >
      <img id="zoomedImage" src={assetUrl(src ?? '')} alt="Zoom" />
    </div>
  );
}
