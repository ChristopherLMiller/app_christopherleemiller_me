import Card from '../components/Card';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import NextSEO from 'next-seo';
import React from 'react';
import { MODELS_QUERY } from '../utils/query';
import { PER_PAGE, SEPARATOR, SITE_TITLE } from '../config';
import { Query } from 'react-apollo';
import ModelListing from '../components/models/ModelListing';
import { StyledModelListings, StyledModelPage } from '../components/styles/Models';
import { Sidebar } from '../components/Sidebar';
import { SidebarList } from '../components/SidebarList';

const title = 'Models';
const description = 'Whether it plane, car or tank, its all here!';

class ModelsPage extends React.Component {

  async fetchData(type) {
    let response = await fetch(`https://strapi.christopherleemiller.me/${type}`);
    let json = await response.json();
    return json;
  }

  render() {
    // set a default value for page if non provided
    const page = parseFloat(this.props.query.page) || 1;



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
          <Query query={MODELS_QUERY} variables={{
            start: page * PER_PAGE - PER_PAGE,
            limit: PER_PAGE,
            scale: this.props.query.scale,
            manufacturer: this.props.query.company,
            completed: this.props.query.completed
          }}>
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
                <StyledModelPage>
                  <StyledModelListings>
                    {data.models.map(model => (
                      <ModelListing key={model.id} model={model} />
                    ))}
                  </StyledModelListings>
                  <Sidebar title="Filters">
                    <SidebarList title="Brand" items={this.fetchData('manufacturers')} />
                    <SidebarList title="Scale" items={this.fetchData('scales')} />
                    <SidebarList title="completed" items={[{ id: 0, slug: 'yes', title: 'Yes' }, { id: 1, slug: 'no', title: 'No' }]} />
                  </Sidebar>
                </StyledModelPage>
              );
            }}
          </Query>
        </main>
        <Footer />
      </>
    );
  }
}

export default ModelsPage;
