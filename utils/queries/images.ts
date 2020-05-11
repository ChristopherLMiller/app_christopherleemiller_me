import gql from "graphql-tag";
import { iUploadFile } from "interfaces/UploadFile";
import { PER_PAGE } from "config";

export interface iImage {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: iUploadFile;
  created_at: string;
  updated_at: string;
}

export interface iImages {
  images: Array<iImage>;
}

export const IMAGES_QUERY = gql`
  query IMAGES_QUERY($start: Int = 0, $limit: Int = ${PER_PAGE}, $where: JSON) {
    images(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: $where
    ) {
      id
      created_at
      updated_at
      image {
        id
        created_at
        updated_at
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        mime
        size
        url
        previewUrl
        provider
        provider_metadata
      }
      title
      description
      slug
    }
  }
`;
