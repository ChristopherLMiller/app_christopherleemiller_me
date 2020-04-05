export interface CategoryType {
  id: string;
  slug: string;
  title: string;
}

export interface CategoriesType {
  categories: Array<CategoryType>;
}

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

export interface ArticleTypes {
  article: {
    id: string;
    featured_image: {
      provider_metadata: {
        public_id: string;
      };
    };
    content: string;
    visibility: string;
    status: string;
    title: string;
    created_at: string;
    updated_at: string;
    user: {
      id: string;
      username: string;
    };
    slug: string;
    categories: Array<CategoryType>;
    tags: Array<TagType>;
  };
  commentsEnabled?: boolean;
  header?: boolean;
}
export interface ArticlesTypes {
  articles: Array<ArticleTypes>;
}


export interface iData {
  [key: string]: Array<ArticleTypes["article"]>;
}