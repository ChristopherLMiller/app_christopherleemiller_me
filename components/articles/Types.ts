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

export interface CommentsType {
  comments: Array<CommentType>;
}

export interface ArticleTypes {
  article: {
    id: string;
    featured_image: {
      public_id: string;
    };
    content_brief: string;
    content: string;
    title: string;
    created_at: string;
    updated_at: string;
    seo_title: string;
    seo_description: string;
    user: {
      id: string;
      username: string;
    };
    slug: string;
    comments: Array<CommentType>;
    categories: Array<CategoryType>;
    tags: Array<TagType>;
  };
  commentsEnabled?: boolean;
  header?: boolean;
}
export interface ArticlesTypes {
  articles: Array<ArticleTypes>;
}
