import gql from "graphql-tag";
import { MODELS_PER_PAGE } from "../../config";

export const MODELS_QUERY = gql`
  query MODELS_QUERY(
    $start: Int = 0
    $limit: Int = ${MODELS_PER_PAGE}
    $sort: String = "updated_at:DESC"
    $where: JSON
  ) {
    models(start: $start, limit: $limit, sort: $sort, where: $where) {
      id
      created_at
      updated_at
      title
      slug
      content
      review
      featured_image {
        provider_metadata
      }
      seo_title
      seo_description
      completed
      visibility
      status
      kit_number
      year_released
      scale {
        scale
        slug
      }
      manufacturer {
        company
        slug
      }
      tags {
        id
        title
        slug
      }
      images(sort: "created_at:DESC") {
        id
        title
        description
        slug
        image {
          provider_metadata
        }
      }
      clockify_id
      scalemates_link
      youtube_link
    }
  }
`;
export const MODELS_QUERY_BRIEF = gql`
  query MODELS_QUERY_BRIEF(
    $start: Int = 0
    $limit: Int = ${MODELS_PER_PAGE}
    $sort: String = "updated_at:DESC"
    $where: JSON
  ) {
    models(start: $start, limit: $limit, sort: $sort, where: $where) {
      id
      title
      slug
      clockify_id
      featured_image {
        provider_metadata
      }
      completed
      visibility
      status
      kit_number
      year_released
      scale {
        scale
      }
      manufacturer {
        company
      }
    }
  }
`;
