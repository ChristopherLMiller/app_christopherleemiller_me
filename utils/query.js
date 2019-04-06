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
      content_brief
      featured_image
      createdAt
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
      content_brief
      featured_image
      createdAt
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
