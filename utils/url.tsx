function serialize(obj) {
  return `?${Object.keys(obj)
    .reduce((a, k) => {
      a.push(`${k}=${encodeURIComponent(obj[k])}`);
      return a;
    }, [])
    .join(`&`)}`;
}

export function urlBuilder(slug, value) {
  return `/models?${slug}=${value}`;
}
