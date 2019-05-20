function serialize(obj) {
  return `?${Object.keys(obj)
    .reduce((a, k) => {
      a.push(`${k}=${encodeURIComponent(obj[k])}`);
      return a;
    }, [])
    .join(`&`)}`;
}

export function urlBuilder(current, slug, value) {
  // check that we have any params first
  if (current.indexOf(`?`) != -1) {
    // decode the url into the path and the params
    const [path, paramString] = current.split(`?`);

    // split the params out into array
    const params = paramString.split(`&`);

    // start with an empty array
    const paramsObject = [];

    // loop each of the params and split it out, push the key and value onto the array
    params.forEach(param => {
      const [key, value] = param.split(`=`);
      paramsObject[key] = value;
    });

    // at this point we can append our key and value passed in onto the object
    // but only if the value isn't empty
    if (value != ``) {
      paramsObject[slug] = value;
    } else {
      delete paramsObject[slug];
    }

    // lastly serialize the object, append the current path to it, and return that!
    return `${path}${serialize(paramsObject)}`;
  }
  return `${current}?${slug}=${value}`;
}
