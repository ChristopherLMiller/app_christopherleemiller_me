import gql from "graphql-tag";

export const ALL_TAGS = gql`
  query ALL_TAGS {
    tags {
      id
      title
      slug
    }
  }
`;
