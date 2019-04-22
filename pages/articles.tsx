import { BriefArticle } from '../components/articles/Brief';
import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Markdown from 'markdown-to-jsx';
import NextSEO from 'next-seo';
import React, { SFC } from 'react';
import { ARTICLES_QUERY } from '../utils/query';
import { PER_PAGE, SEPARATOR, SITE_TITLE } from '../config';
import { Query } from 'react-apollo';


const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;


interface ArticlesPageTypes {
  query: {
    page: string,
    category: string,
    tag: string,
  }
}

const ArticlesPage: SFC<ArticlesPageTypes> = ({ query }) => {

  // set a default value for page if non provided
  const page = parseFloat(query.page) || 1;


  return (
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
        <Query
          query={ARTICLES_QUERY}
          variables={{
            start: page * PER_PAGE - PER_PAGE,
            limit: PER_PAGE,
            category: query.category,
            tag: query.tag,
          }}
        >
          {({ data, error, loading, refetch }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log(`Fetch Error: ${error}`);
              return (
                <Card>
                  <h3>Unable to fetch archives</h3>
                  <p>{error.message}</p>
                </Card>
              );
            }

            return (
              <>
                {data.articles.map(article => (
                  <BriefArticle article={article} key={article.id}>
                    <Markdown>{article.seo_description}</Markdown>
                  </BriefArticle>
                ))}
              </>
            );
          }}
        </Query>
      </main>
      <Footer />
    </>
  );
}

export default ArticlesPage;
