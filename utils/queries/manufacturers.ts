import gql from "graphql-tag";

export const ALL_MANUFACTURERS_QUERY = gql`
  query ALL_MANUFACTURERS_QUERY {
    manufacturers(sort: "company:ASC") {
      id
      slug
      company
    }
  }
`;

export type AllManufacturersQuery = {
  [key: string]: string;
};
