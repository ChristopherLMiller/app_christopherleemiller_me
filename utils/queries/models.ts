import gql from "graphql-tag";
import { MODELS_PER_PAGE } from "config";

import { iUploadFile } from "interfaces/UploadFile";
import { iTag } from "./tags";
import { iImage } from "./images";
import { visiblityEnum } from "interfaces/visibilityEnum";
import { statusEnum } from "interfaces/statusEnum";

export interface ModelTypes {
  model: {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    slug: string;
    featured_image: iUploadFile;
    content: string;
    images: Array<iImage>;
    review: string;
    seo_title: string;
    seo_description: string;
    completed: Boolean;
    visibility: visiblityEnum;
    status: statusEnum;
    kit_number: string;
    year_released: number;
    scale: {
      scale: string;
      slug: string;
    };
    manufacturer: {
      company: string;
      slug: string;
    };
    tags: Array<iTag>;
    clockify_id: string;
    scalemates_link: string;
    youtube_link: string;
  };
}

export interface ModelsType {
  models: Array<ModelTypes>;
}

export interface iModelData {
  [key: string]: Array<ModelTypes["model"]>;
}

export const MODELS_QUERY = gql`
  query MODELS_QUERY(
    $start: Int = 0
    $limit: Int = ${MODELS_PER_PAGE}
    $sort: String = "updated_at:DESC"
    $where: JSON
  ) {
    models(start: $start, limit: $limit, sort: $sort, where: $where) {
      id
      created_at
      updated_at
      title
      slug
      content
      review
      featured_image {
        provider_metadata
      }
      seo_title
      seo_description
      completed
      visibility
      status
      kit_number
      year_released
      scale {
        scale
        slug
      }
      manufacturer {
        company
        slug
      }
      tags {
        id
        title
        slug
      }
      images(sort: "created_at:DESC") {
        id
        title
        description
        slug
        image {
          provider_metadata
        }
      }
      clockify_id
      scalemates_link
      youtube_link
    }
  }
`;
export const MODELS_QUERY_BRIEF = gql`
  query MODELS_QUERY_BRIEF(
    $start: Int = 0
    $limit: Int = ${MODELS_PER_PAGE}
    $sort: String = "updated_at:DESC"
    $where: JSON
  ) {
    models(start: $start, limit: $limit, sort: $sort, where: $where) {
      id
      title
      slug
      clockify_id
      featured_image {
        provider_metadata
      }
      completed
      visibility
      status
      kit_number
      year_released
      scale {
        scale
      }
      manufacturer {
        company
      }
    }
  }
`;
