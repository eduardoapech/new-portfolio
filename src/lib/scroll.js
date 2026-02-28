export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
