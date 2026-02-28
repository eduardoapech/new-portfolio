import React from 'react';
import { htmlString } from '../lib/i18n.js';

export default function SectionHeader({ subtitle, titleHtml }) {
  return (
    <div className="section-header reveal">
      <p className="subtitle">{subtitle}</p>
      <h2 className="section-title" dangerouslySetInnerHTML={htmlString(titleHtml)} />
    </div>
  );
}
