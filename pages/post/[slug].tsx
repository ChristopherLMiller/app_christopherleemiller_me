import ReactMarkdown from 'react-markdown';
import { SFC } from 'react';
import { useQuery } from 'react-apollo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '../../components/Card';
import { FullArticle } from '../../components/articles/Full';
import { ARTICLES_QUERY } from '../../utils/query';
import { withLayout } from '../../components/layout/withLayout';
import { Main } from '../../styles/Generics';
import { iData } from '../../components/articles/Types';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const PostPage: SFC = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      where: {
        slug_contains: router.query.slug,
      },
    },
  });

  if (loading)
    return (
      <Main>
        <p>Loading...</p>
      </Main>
    );
  if (error) {
    console.error(`Fetch Error: ${error.message}`);

    return (
      <Main>
        <Card heading="Unable to load data">
          <h2>{error.message}</h2>
          <p>
            Sorry. Something happened and we can't seem to load data right now.
            Possibly you're offline and if not please let us know.
          </p>
        </Card>
      </Main>
    );
  }

  if (data !== undefined) {
    if (data.articles.length >= 1) {
      return (
        <Main>
          {data !== undefined &&
            data.articles.map(article => (
              <FullArticle article={article}>
                <ReactMarkdown source={article.content} escapeHtml={false} />
              </FullArticle>
            ))}
        </Main>
      );
    }
  }

  return (
    <Main>
      <Card heading="404 Article Not Found">
        <p>
          Sorry. We seem to have lost this article somewhere in the interwebs. I
          don't know what happened to it! Some gremlin somewhere must have
          snatched it on me, that or I just never wrote this one to begin with.
          Hmmmmm.
        </p>
        <hr />
        <Link href="/articles">
          <a>View All Articles</a>
        </Link>
      </Card>
    </Main>
  );
};

export default withLayout(PostPage, { title, description, useSEO: false });
