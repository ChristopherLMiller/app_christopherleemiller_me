import gql from "graphql-tag";
import { PER_PAGE } from "../../config";

export const ARTICLES_QUERY = gql`
  query ARTICLES_QUERY($start: Int = 0, $limit: Int = ${PER_PAGE}, $where: JSON) {
    articles(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: $where
    ) {
      id
      slug
      title
      featured_image {
        provider_metadata
      }
      created_at
      updated_at
      content
      status
      visibility
      user {
        username
        id
      }
      categories {
        id
        slug
        title
      }
      tags {
        id
        slug
        title
      }
    }
  }
`;
