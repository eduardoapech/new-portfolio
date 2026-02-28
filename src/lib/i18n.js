export function t(translations, lang, key) {
  return translations?.[lang]?.[key] ?? '';
}

export function htmlString(value) {
  return { __html: value };
}
