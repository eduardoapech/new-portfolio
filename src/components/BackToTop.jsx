import React, { useEffect, useState } from 'react';
import { scrollToTop } from '../lib/scroll.js';

export default function BackToTop({ isHidden }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisible(y > 300);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="backToTop"
      className="back-to-top"
      style={{ display: isVisible && !isHidden ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}
      onClick={scrollToTop}
    >
      <span>↑</span>
    </button>
  );
}
