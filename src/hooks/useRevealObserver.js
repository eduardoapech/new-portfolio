import { useEffect } from 'react';

export function useRevealObserver(deps = []) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('show');
        }
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
