import { UploadFile } from "../../interfaces/UploadFile";

export interface TagType {
  id: string;
  slug: string;
  title: string;
}

export interface TagsType {
  tags: Array<TagType>;
}

export interface CommentType {
  id: string;
  user: {
    username: string;
  };
}

export interface CommentsType {
  comments: Array<CommentType>;
}

export interface ImageType {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: {
    provider_metadata: {
      public_id: string;
    };
  };
}

export interface ModelTypes {
  model: {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    slug: string;
    featured_image: UploadFile;
    content: string;
    images: Array<UploadFile>;
    review: string;
    seo_title: string;
    seo_description: string;
    completed: Boolean;
    visibility: string;
    status: string;
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
    tags: Array<TagType>;
    comments: Array<CommentType>;
    clockify_id: string;
    scalemates_link: string;
  };
}

export interface ModelsType {
  models: Array<ModelTypes>;
}

export interface iData {
  [key: string]: Array<ModelTypes["model"]>;
}
