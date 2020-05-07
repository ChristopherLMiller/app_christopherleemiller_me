import gql from "graphql-tag";

export interface iCategory {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
}

export interface iCategories {
  categories: Array<iCategory>;
}

export const CATEGORIES_QUERY = gql`
  query CATEGORIES_QUERY($start: Int = 0, $limit: Int = 100, $where: JSON) {
    categories(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: $where
    ) {
      id
      created_at
      updated_at
      title
      slug
    }
  }
`;
