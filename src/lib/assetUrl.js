export function assetUrl(inputUrl) {
  if (!inputUrl) return inputUrl;

  // Keep absolute or special URLs intact.
  if (
    inputUrl.startsWith('http://') ||
    inputUrl.startsWith('https://') ||
    inputUrl.startsWith('//') ||
    inputUrl.startsWith('data:') ||
    inputUrl.startsWith('blob:')
  ) {
    return inputUrl;
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleaned = inputUrl.replace(/^\/+/, '');
  return `${baseUrl}${cleaned}`;
}
