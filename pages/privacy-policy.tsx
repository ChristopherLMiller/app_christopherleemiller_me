import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import FullArticle from '../components/articles/Full';
import Header from '../components/layout/Header';
import Markdown from 'markdown-to-jsx';
import NextSEO from 'next-seo';
import React from 'react';
import { ARTICLE_QUERY } from '../utils/query';
import { Query } from 'react-apollo';
import { SEPARATOR, SITE_TITLE } from '../config';

const title = 'Privacy Policy';
const description = 'My policies regarding your privacy and safety';

const PrivacyPolicyPage = () => (
  <>
    <NextSEO
      config={{
        title: `${SITE_TITLE}${SEPARATOR}${title}`,
        description,
        openGraph: {
          title: `${SITE_TITLE}${SEPARATOR}${title}`,
          description,
        },
      }}
    />
    <Header title={title} description={description} />
    <main>
      <Query query={ARTICLE_QUERY} variables={{ slug: 'privacy-policy' }}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) {
            console.log(error.message);
            return (
              <Card>
                <h3>Unable to fetch archive</h3>
                <p>{error.message}</p>
              </Card>
            );
          }

          const article = data.articles[0];
          return (
            <>
              <FullArticle article={article} commentsEnabled={false}>
                <Markdown>{article.content}</Markdown>
              </FullArticle>
            </>
          );
        }}
      </Query>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicyPage;
