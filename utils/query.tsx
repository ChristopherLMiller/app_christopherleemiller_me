import gql from 'graphql-tag';

export const ARTICLES_QUERY = gql`
  query ARTICLES_QUERY(
    $start: Int = 0
    $limit: Int = 20
    $article_slug: String
    $category: String
    $tag: String
    $published: Boolean = true
  ) {
    articles(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: {
        slug: $article_slug
        published: $published
        categories: { slug: $category }
        tags: { slug: $tag }
      }
    ) {
      id
      slug
      title
      published
      featured_image {
        public_id
      }
      created_at
      updated_at
      seo_description
      seo_title
      content
      user {
        username
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
    $limit: Int = 20
    $model_slug: String
    $scale: String
    $manufacturer: String
    $tag: String
    $completed: String
    $sort: String = "updated_at:DESC"
    $published: Boolean = true
  ) {
    models(
      start: $start
      limit: $limit
      sort: $sort
      where: {
        slug: $model_slug
        scale: { slug: $scale }
        manufacturer: { slug: $manufacturer }
        tags: { slug: $tag }
        completed: $completed
        published: $published
      }
    ) {
      id
      created_at
      updated_at
      title
      slug
      content
      review
      featured_image {
        public_id
      }
      seo_title
      seo_description
      completed
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
      images(sort: "updated_at:DESC") {
        id
        title
        description
        slug
        image {
          public_id
        }
      }
      clockify_id
      scalemates_link
    }
  }
`;
export const MODELS_QUERY_BRIEF = gql`
  query MODELS_QUERY(
    $start: Int = 0
    $limit: Int = 20
    $model_slug: String
    $scale: String
    $manufacturer: String
    $tag: String
    $completed: String
    $sort: String = "updated_at:DESC"
    $published: Boolean = true
  ) {
    models(
      start: $start
      limit: $limit
      sort: $sort
      where: {
        slug: $model_slug
        scale: { slug: $scale }
        manufacturer: { slug: $manufacturer }
        tags: { slug: $tag }
        completed: $completed
        published: $published
      }
    ) {
      id
      title
      slug
      featured_image {
        public_id
      }
      completed
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
      models {
        id
      }
    }
  }
`;
