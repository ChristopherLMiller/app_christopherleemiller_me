interface CategoryType {
  _id: string,
  slug: string,
  title: string,
};

interface CategoriesType {
  categories: Array<CategoryType>,
};

interface TagType {
  _id: string,
  slug: string,
  title: string,
};

interface TagsType {
  tags: Array<TagType>,
};

interface CommentType {
  _id: string,
  user: {
    username: string,
  },
};

interface CommentsType {
  comments: Array<CommentType>,
};

interface ArticleTypes {
  article: {
    _id: string,
    featured_image: string,
    content_brief: string,
    content: string,
    title: string,
    createdAt: string,
    modifiedAt: string,
    user: {
      _id: string,
      username: string,
    },
    slug: string,
    comments: Array<CommentType>,
    categories: Array<CategoryType>,
    tags: Array<TagType>,
  },
  commentsEnabled?: boolean,
};

export default ArticleTypes;
export { CategoryType, CategoriesType, CommentType, CommentsType, TagType, TagsType };