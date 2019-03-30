import React from 'react';
import NextSEO from 'next-seo';
import Markdown from 'markdown-to-jsx';
import { Query } from 'react-apollo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FullArticle from '../components/articles/Full';
import Card from '../components/Card';

import { siteTitle, separator } from '../config';
import { ARTICLE_QUERY } from '../utils/query';

const title = 'Privacy Policy';
const description = 'My policies regarding your privacy and safety';
class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title: `${siteTitle}${separator}${title}`,
            description,
            openGraph: {
              title: `${siteTitle}${separator}${title}`,
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
  }
}

export default PrivacyPolicyPage;
