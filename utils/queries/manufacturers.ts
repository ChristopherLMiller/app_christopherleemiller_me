import gql from "graphql-tag";

export interface iManufacturer {
  id: string;
  created_at: string;
  updated_at: string;
  company: string;
  slug: string;
}

export interface iManufacturers {
  manufacturers: Array<iManufacturer>;
}

export type AllManufacturersQuery = {
  [key: string]: string;
};
export const MANUFACTURERS_QUERY = gql`
  query MANUFACTURERS_QUERY {
    manufacturers(sort: "company:ASC") {
      id
      slug
      company
    }
  }
`;
