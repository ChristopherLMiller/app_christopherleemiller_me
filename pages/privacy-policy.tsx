import ReactMarkdown from 'react-markdown';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from '../components/Card';
import { FullArticle } from '../components/articles/Full';
import { withLayout } from '../components/layout/Layout';
import { Main } from '../styles/Generics';
import { ARTICLES_QUERY } from '../utils/query';
import { iData } from '../components/articles/Types';

const title = `Privacy Policy`;
const description = `My policies regarding your privacy and safety`;

const PrivacyPolicyPage = () => {
  const { loading, error, data } = useQuery<iData>(ARTICLES_QUERY, {
    variables: { article_slug: `privacy-policy`, published: false, limit: 1 },
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

  return (
    <Main>
      {data !== undefined &&
        data.articles.map(article => (
          <FullArticle
            article={article}
            commentsEnabled={false}
            header={false}
            key={article.id}
          >
            <ReactMarkdown source={article.content} />
          </FullArticle>
        ))}
    </Main>
  );
};

export default withLayout(
  PrivacyPolicyPage,
  title,
  description,
  `/privacy-policy`
);
