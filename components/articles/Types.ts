interface CategoryType {
  id: string;
  slug: string;
  title: string;
}

interface CategoriesType {
  categories: Array<CategoryType>;
}

interface TagType {
  id: string;
  slug: string;
  title: string;
}

interface TagsType {
  tags: Array<TagType>;
}

interface CommentType {
  id: string;
  user: {
    username: string;
  };
}

interface CommentsType {
  comments: Array<CommentType>;
}

interface ArticleTypes {
  article: {
    id: string;
    featured_image: string;
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
}

export {
  ArticleTypes,
  CategoryType,
  CategoriesType,
  CommentType,
  CommentsType,
  TagType,
  TagsType,
};
