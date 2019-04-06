import React from 'react';
import NextSEO from 'next-seo';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

import { ALL_ARTICLES_QUERY } from '../utils/query';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { perPage, siteTitle, separator } from '../config';
import BriefArticle from '../components/articles/Brief';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const title = 'From My Desk';
const description =
  'Archives concerning all matters web development and beyond';

const Center = styled.div`
  text-align: center;
`;

class ArchivesPage extends React.Component {
  static propTypes = {
    query: PropTypes.object,
  };

  render() {
    // set a default value for page if non provided
    const page = parseFloat(this.props.query.page) || 1;

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
          <Center>
            <Pagination page={page} />
          </Center>
          <Query
            query={ALL_ARTICLES_QUERY}
            variables={{
              start: page * perPage - perPage,
              limit: perPage,
            }}
          >
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) {
                console.log(error.message);
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
                      <Markdown>{article.content_brief}</Markdown>
                    </BriefArticle>
                  ))}
                </>
              );
            }}
          </Query>
          <Center>
            <Pagination page={page} />
          </Center>
        </main>
        <Footer />
      </>
    );
  }
}

export default ArchivesPage;
