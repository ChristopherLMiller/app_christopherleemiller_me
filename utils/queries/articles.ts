import gql from "graphql-tag";
import { PER_PAGE } from "config";
import { iUploadFile } from "interfaces/UploadFile";
import { visiblityEnum } from "interfaces/visibilityEnum";
import { statusEnum } from "interfaces/statusEnum";
import { iCategory } from "utils/queries/categories";
import { iTag } from "utils/queries/tags";

export interface iArticleFields {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  featured_image: iUploadFile;
  user: any;
  visibility: visiblityEnum;
  status: statusEnum;
  slug: string;
  categories: Array<iCategory>;
  tags: Array<iTag>;
}

export interface iArticle {
  article: iArticleFields;
}

export interface iArticles {
  articles: Array<iArticle>;
}

export interface iArticleData {
  [key: string]: Array<iArticle["article"]>;
}

export const ARTICLE_QUERY_STRING = `query ARTICLES_QUERY($start: Int = 0, $limit: Int = ${PER_PAGE}, $where: JSON) {
  articles(
    limit: $limit
    start: $start
    sort: "created_at:DESC"
    where: $where
  ) {
    id
    created_at
    updated_at
    title
    content
    featured_image {
      provider_metadata
    }
    user {
      username
      id
    }
    visibility
    status
    slug
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
}`;

export const ARTICLES_QUERY = gql`
  ${ARTICLE_QUERY_STRING}
`;
