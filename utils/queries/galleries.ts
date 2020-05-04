import gql from "graphql-tag";

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
