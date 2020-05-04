import gql from "graphql-tag";
import { MODELS_PER_PAGE, PER_PAGE } from "../config";

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

export const ALL_SCALES_QUERY = gql`
  query ALL_SCALES_QUERY {
    scales(sort: "scale:ASC") {
      id
      slug
      scale
    }
  }
`;

export const ALL_MODELS_TAGS_QUERY = gql`
  query ALL_MODEL_TAGS_QUERY {
    tags {
      id
      title
      slug
    }
  }
`;

export const ALERTS = gql`
  query ALERTS {
    alerts {
      id
      guid
      title
      description
      valid_till
      updated_at
      color
    }
  }
`;

export const GET_ALL_GALLERIES = gql`
  query GET_ALL_GALLERIES {
    galleries {
      created_at
      updated_at
      title
      featured_image {
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        size
        url
        previewUrl
        provider
        provider_metadata
      }
      slug
      visibility
      status
      description
      gallery_tags {
        name
        slug
      }
      gallery_categories {
        name
        slug
      }
      Images {
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        size
        url
        previewUrl
        provider
        provider_metadata
      }
    }
  }
`;

export const GET_ALL_GALLERIES_BRIEF = gql`
  query GET_ALL_GALLERIES_BRIEF {
    galleries {
      created_at
      updated_at
      title
      featured_image {
        id
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        size
        url
        previewUrl
        provider
        provider_metadata
      }
      slug
      visibility
      status
      description
      gallery_tags {
        name
        slug
      }
      gallery_categories {
        name
        slug
      }
      Images {
        id
      }
    }
  }
`;
