import gql from 'graphql-tag';

export const ARTICLES_QUERY = gql`
  query ARTICLES_QUERY($start: Int = 0, $limit: Int = 10, $article_slug: String, $published: Boolean = true) {
    articles(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: { slug: $article_slug, published: $published}
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

export const ARTICLE_PAGINATION_QUERY = gql`
  query ARTICLE_PAGINATION_QUERY {
    articlesConnection(where: { published: true }) {
      aggregate {
        count
      }
    }
  }
`;

export const ALL_MODELS_QUERY = gql`
  query ALL_MODELS_QUERY($start: Int = 0, $limit: Int = 10) {
    models(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: { published: true }
    ) {
      _id
      title
      content
      created_at
      updated_at
      slug
      seo_title
      seo_description
      published
      completed
      featured_image
      tags {
        title
      }
      comments {
        text
        user {
          username
        }
      }
    }
  }
`;

export const MODEL_PAGINATION_QUERY = gql`
  query MODEL_PAGINATION_QUERY {
    modelsConnection(where: { published: true }) {
      aggregate {
        count
      }
    }
  }
`;