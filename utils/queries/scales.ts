import gql from "graphql-tag";

export interface iScale {
  id: string;
  created_at: string;
  updated_at: string;
  scale: string;
  slug: string;
}

export interface iScales {
  scales: Array<iScale>;
}

export const SCALES_QUERY = gql`
  query SCALES_QUERY {
    scales(sort: "scale:ASC") {
      id
      slug
      scale
    }
  }
`;
