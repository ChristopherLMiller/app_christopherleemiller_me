import gql from "graphql-tag";

export interface iTag {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
}

export interface iTags {
  tags: Array<iTag>;
}

export const TAGS_QUERY = gql`
  query TAGS_QUERY {
    tags {
      id
      created_at
      updated_at
      title
      slug
    }
  }
`;
