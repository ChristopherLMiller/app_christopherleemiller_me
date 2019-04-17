import gql from 'graphql-tag';

export const ALL_ARTICLES_QUERY = gql`
  query ALL_ARTICLES_QUERY($start: Int = 0, $limit: Int = 10) {
    articles(
      limit: $limit
      start: $start
      sort: "createdAt:DESC"
      where: { published: true }
    ) {
      _id
      slug
      title
      featured_image
      createdAt
      updatedAt
      seo_description
      seo_title
      content
      user {
        username
      }
      comments(sort: "ASC") {
        _id
        text
        createdAt
        user {
          username
        }
      }
      categories {
        _id
        slug
        title
      }
      tags {
        _id
        slug
        title
      }
    }
  }
`;

export const ARTICLE_QUERY = gql`
  query ARTICLE_QUERY($slug: String) {
    articles(where: { slug: $slug }) {
      _id
      slug
      title
      content
      featured_image
      seo_title
      seo_description
      createdAt
      updatedAt
      user {
        username
      }
      comments(sort: "ASC") {
        _id
        text
        createdAt
        user {
          username
        }
      }
      categories {
        _id
        slug
        title
      }
      tags {
        _id
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
      sort: "createdAt:DESC"
      where: { published: true }
    ) {
      _id
      title
      content
      createdAt
      updatedAt
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