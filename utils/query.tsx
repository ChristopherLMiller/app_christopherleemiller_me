import gql from 'graphql-tag';

export const ARTICLES_QUERY = gql`
query ARTICLES_QUERY(
  $start: Int = 0,
  $limit: Int = 10,
  $article_slug: String,
  $category: String,
  $tag: String,
  $published: Boolean = true) {
    articles(
      limit: $limit,
      start: $start,
      sort: "created_at:DESC",
      where: {
        slug: $article_slug,
        published: $published,
        categories: {
          slug: $category,
        },
        tags: {
          slug: $tag,
        },
      }
    ) {
      id
      slug
      title
      published
      featured_image
      created_at
      updated_at
      seo_description
      seo_title
      content
      user {
        username
      }
      comments {
        id
        comment
        created_at
        user {
          username
        }
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
  $start: Int = 0,
  $limit: Int = 20,
  $model_slug: String,
  $scale: String,
  $manufacturer: String,
  $completed: Boolean,
  $published: Boolean = true
) {
  models(
    start: $start,
    limit: $limit,
    sort: "title:ASC",
    where: {
      slug: $model_slug,
      scale: {
        slug: $scale,
      },
      manufacturer: {
        slug: $manufacturer,
      },
      completed: $completed,
      published: $published,
    }
  ) {
    id
    created_at
    updated_at
    title
    slug
    content
    featured_image
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
    comments {
      id
      comment
      created_at
      user {
        username
      }
    }
    clockify_id
    scalemates_link
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

export const ALL_SCALES_QUERY = gql`
query ALL_SCALES_QUERY {
  scales(sort: "scale:ASC") {
    id
    slug
    scale
  }
}
`;