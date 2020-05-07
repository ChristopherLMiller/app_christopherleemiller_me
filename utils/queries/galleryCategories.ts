import gql from "graphql-tag";

export interface iGalleryCategory {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
}

export interface iGalleryCategories {
  galleryCategories: Array<iGalleryCategory>;
}

export const GALLERY_CATEGORIES_QUERY = gql`
  query GALLERY_CATEGORIES_QUERY(
    $start: Int = 0
    $limit: Int = 100
    $where: JSON
  ) {
    galleryCategories(
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
