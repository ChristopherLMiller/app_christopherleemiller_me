import querystring, { ParsedUrlQuery } from "querystring";

export function urlBuilder(
  current: ParsedUrlQuery,
  slug: string,
  value: string
) {
  if (value != ``) {
    current[slug] = value;
  } else {
    delete current[slug];
  }

  return querystring.stringify(current);
}
