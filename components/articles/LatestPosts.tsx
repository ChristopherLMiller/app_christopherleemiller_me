import { useQuery } from "react-apollo";
import { iArticleData, ARTICLES_QUERY } from "utils/queries/articles";
import Card from "components/Card";
import { Loader } from "components/elements/Loader";
import { imageURL } from "utils/functions";
import styled from "styled-components";
import Link from "next/link";
import { formatRelative } from "date-fns";
import { countWords, timeToRead } from "utils/functions";

const PostWrapper = styled.div`
  grid-template-columns: 30% auto;
  display: grid;
  padding: 10px 0;
`;

const PostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PostInfo = styled.div`
  padding: 0 10px;
  text-align: left;

  a,
  p {
    margin: 0;
    text-align: left;
  }

  p {
    font-size: 0.85em;
  }
`;

const LatestPosts = () => {
  const { data, loading, error } = useQuery<iArticleData>(ARTICLES_QUERY, {
    variables: {
      start: 0,
      limit: 5,
      where: {
        visibility: "PUBLIC",
        status: "PUBLISHED",
      },
    },
  });

  return (
    <Card heading="Latest Posts" padding={false}>
      {error && (
        <div>
          <p>Unable to load posts.</p>
        </div>
      )}
      <Loader isLoading={loading} />
      {!loading &&
        data?.articles.map((article) => (
          <PostWrapper id={article.id}>
            <PostImg
              src={imageURL(
                article?.featured_image?.provider_metadata?.public_id
              )}
            />
            <PostInfo>
              <Link
                as={`/blog/post/${article.slug}`}
                href={`/blog/post/[slug]`}
              >
                <a>{article.title}</a>
              </Link>
              <p>
                Posted:{" "}
                {formatRelative(new Date(article.created_at), new Date())}
              </p>
              <p>
                Author: {article.user.username} - Time To Read:{" "}
                {timeToRead(countWords(article.content))}
              </p>
            </PostInfo>
          </PostWrapper>
        ))}
    </Card>
  );
};

export { LatestPosts };
