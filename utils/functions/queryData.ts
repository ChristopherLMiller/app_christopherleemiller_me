import { parseCookies } from "nookies";
import { GRAPHQL_ENDPOINT } from "config";
import { NextPageContext } from "next";

export const queryData = async (
  ctx: NextPageContext,
  query: string,
  where: object
) => {
  // extract out the cookies from the context
  const cookies = parseCookies(ctx);

  // setup the options for the query
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: { where: where },
    }),
  };

  // if cookies contain bearer token, add it
  if (cookies?.token) {
    // @ts-ignore
    options.headers["Authorization"] = `Bearer ${cookies.token}`;
  }

  // now we can fetch the data
  const response = await fetch(GRAPHQL_ENDPOINT, options);
  const data = await response.json();

  return data.data;
};
