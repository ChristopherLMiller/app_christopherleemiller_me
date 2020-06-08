import gql from "graphql-tag";
import { iUploadFile } from "interfaces/UploadFile";
import { iGalleryCategories } from "utils/queries/galleryCategories";
import { iGalleryTags } from "utils/queries/galleryTags";
import { statusEnum } from "interfaces/statusEnum";
import { visiblityEnum } from "interfaces/visibilityEnum";
import { PER_PAGE } from "config";

export interface iGalleryFields {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  featured_image: iUploadFile;
  slug: string;
  visibility: visiblityEnum;
  status: statusEnum;
  description: string;
  gallery_categories: Array<iGalleryCategories>;
  gallery_tags: Array<iGalleryTags>;
  Images: Array<iUploadFile>;
}

export interface iGallery {
  gallery: iGalleryFields;
}

export interface iGalleries {
  galleries: Array<iGallery>;
}

export interface iGalleryData {
  [key: string]: Array<iGallery["gallery"]>;
}
export const GALLERIES_QUERY = gql`
  query GALLERIES_QUERY($start: Int = 0, $limit: Int = ${PER_PAGE}, $where: JSON) {
    galleries(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: $where
    ) {
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

export const GALLERIES_QUERY_BRIEF = gql`
  query GALLERIES_QUERY_BRIEF($start: Int = 0, $limit: Int = ${PER_PAGE}, $where: JSON) {
    galleries(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: $where
    ) {
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
