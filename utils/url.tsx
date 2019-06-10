function serialize(obj) {
  return `?${Object.keys(obj)
    .reduce((a, k) => {
      a.push(`${k}=${encodeURIComponent(obj[k])}`);
      return a;
    }, [])
    .join(`&`)}`;
}

export function urlBuilder(current, slug, value) {
  if (value != ``) {
    current[slug] = value;
  } else {
    delete current[slug];
  }
  return serialize(current);
}
