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

export const ALL_MODELS_QUERY = gql`
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
    sort: "created_at:DESC",
    where: {
      slug: $model_slug,
      scale: {
        scale: $scale,
      },
      manufacturer: {
        company: $manufacturer,
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
    }
    manufacturer {
      company
    }
    tags {
      id
      title
    }
    comments {
      id
      comment
      created_at
      user {
        username
      }
    }
  }
}
`;