function getUrl(url?: string): string {
  if (!!url) {
    return url;
  } else {
    const canonicalEl = document.querySelector<HTMLLinkElement>(
      'link[rel=canonical]',
    );

    return canonicalEl ? canonicalEl.href : window.location.href;
  }
}

export { getUrl };
