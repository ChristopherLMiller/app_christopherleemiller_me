import BriefArticle from '../components/articles/Brief';
import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Markdown from 'markdown-to-jsx';
import NextSEO from 'next-seo';
import Pagination from '../components/Pagination';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { ALL_ARTICLES_QUERY } from '../utils/query';
import { PER_PAGE, SEPARATOR, SITE_TITLE } from '../config';
import { Query } from 'react-apollo';


const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const Center = styled.div`
  text-align: center;
`;

interface ArticlesPageTypes {
  query: {
    page: number,
  }
}

const ArchivesPage: SFC<ArticlesPageTypes> = ({ query }) => (
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
      <Center>
        <Pagination page={query.page} />
      </Center>
      <Query
        query={ALL_ARTICLES_QUERY}
        variables={{
          start: query.page * PER_PAGE - PER_PAGE,
          limit: PER_PAGE,
        }}
      >
        {({ data, error, loading }) => {
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
                <BriefArticle article={article} key={article._id}>
                  <Markdown>{article.seo_description}</Markdown>
                </BriefArticle>
              ))}
            </>
          );
        }}
      </Query>
      <Center>
        <Pagination page={query.page} />
      </Center>
    </main>
    <Footer />
  </>
);

export default ArchivesPage;
