import gql from "graphql-tag";
import { PER_PAGE } from "../../config";

export interface iGalleryTag {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
}

export interface iGalleryTags {
  galleryTags: Array<iGalleryTag>;
}

export const GALLERY_TAGS_QUERY = gql`
  query GALLERY_TAGS_QUERY($start: Int = 0, $limit: Int = ${PER_PAGE}, $where: JSON) {
    galleryTags(
        limit: $limit
        start: $start
        sort: "created_at:DESC"
        where: $where
      ) {
      id
      created_at
      updated_at
      name
      slug
    }
  }
`;
