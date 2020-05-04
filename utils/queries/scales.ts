import gql from "graphql-tag";

export const ALL_SCALES_QUERY = gql`
  query ALL_SCALES_QUERY {
    scales(sort: "scale:ASC") {
      id
      slug
      scale
    }
  }
`;
