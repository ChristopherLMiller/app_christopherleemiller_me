import { Query } from 'react-apollo';
import React, { SFC } from 'react';
import { withLayout } from '../components/layout/Layout';
import Card from '../components/Card';
import {
  MODELS_QUERY,
  ALL_MANUFACTURERS_QUERY,
  ALL_SCALES_QUERY,
  ALL_MODELS_TAGS_QUERY,
} from '../utils/query';
import { PER_PAGE } from '../config';
import { ModelListing } from '../components/models/ModelListing';
import {
  StyledModelListings,
  StyledModelPage,
  ModelListingPose,
} from '../styles/Models';
import { Sidebar } from '../components/Sidebar';
import { SidebarDropdown } from '../components/SidebarDropdown';
import { modelsSidebarCompletedFilter, modelsSidebarSort } from '../utils/json';
import { Pagination } from '../components/Pagination';
import { Main } from '../styles/Themes';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

interface ModelsPageTypes {
  query: {
    page: string;
    scale: string;
    company: string;
    completed: string;
    tag: string;
    sort: string;
  };
}

const ModelsPage: SFC<ModelsPageTypes> = ({ query }) => {
  // set a default value for page if non provided
  const page = parseFloat(query.page) || 1;
  let completed;

  if (query.completed == `yes`) {
    completed = `true`;
  } else if (query.completed == `no`) {
    completed = `false`;
  }

  return (
    <Main>
      <StyledModelPage>
        <Sidebar title="Filters">
          <SidebarDropdown
            items={modelsSidebarSort}
            slug="sort"
            title="Sort By"
          />
          <SidebarDropdown
            items={modelsSidebarCompletedFilter}
            slug="completed"
            title="Completed"
          />
          <SidebarDropdown
            query={ALL_MANUFACTURERS_QUERY}
            slug="company"
            title="Brand"
            field="company"
          />
          <SidebarDropdown
            query={ALL_SCALES_QUERY}
            slug="scale"
            title="Scale"
            field="scale"
          />
          <SidebarDropdown
            query={ALL_MODELS_TAGS_QUERY}
            slug="tag"
            title="Tags"
            field="title"
          />
        </Sidebar>
        <Query
          query={MODELS_QUERY}
          variables={{
            start: page * PER_PAGE - PER_PAGE,
            limit: PER_PAGE,
            scale: query.scale,
            manufacturer: query.company,
            tag: query.tag,
            sort: query.sort,
            completed,
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log(`Fetch Error: ${error}`);
              return (
                <Card>
                  <h3>Unable to fetch models</h3>
                  <p>{error.message}</p>
                </Card>
              );
            }

            // if there is nothing in the dataset lets let the user know this
            if (data.models.length < 1) {
              return (
                <Card>
                  <h3>No Results Found</h3>
                  <p>
                    Please try different search parameters as nothing was found.
                  </p>
                </Card>
              );
            }

            return (
              <StyledModelListings>
                {data.models.map(model => (
                  <ModelListing key={model.id} model={model} />
                ))}
              </StyledModelListings>
            );
          }}
        </Query>

        <Pagination page={page} content_type="models" />
      </StyledModelPage>
    </Main>
  );
};

export default withLayout(ModelsPage, title, description, `/models`);
