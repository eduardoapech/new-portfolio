import React from 'react';

export default function Footer({ footerText, socialLinks }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content reveal">
          <p className="footer-text">{footerText}</p>

          <div className="social-links reveal" id="socialLinks">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="social-icon"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
