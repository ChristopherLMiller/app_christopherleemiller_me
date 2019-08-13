import { Query } from 'react-apollo';
import React, { SFC, Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
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
import { StyledModelListings, StyledModelPage } from '../styles/Models';
import { Sidebar } from '../components/Sidebar';
import { Select } from '../components/inputs/Select';
import { modelsSidebarCompletedFilter, modelsSidebarSort } from '../utils/json';
import { Main } from '../styles/Generics';
import { iData } from '../components/models/Types';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

const StyledSidebarItem = styled.div`
  padding: 10px;
`;

const SidebarDropdownHeading = styled.h5`
  margin: 0;
  color: var(--background-darker);
  text-align: center;
  font-size: 1.5em;
  font-family: var(--font-family);
  text-transform: uppercase;
  text-decoration: underline;
  padding: 20px 0 0 0;
`;

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

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  });

  return (
    <Main>
      <StyledModelPage>
        <Sidebar title="Filters">
          <StyledSidebarItem>
            <SidebarDropdownHeading>Sort By</SidebarDropdownHeading>
            <Select items={modelsSidebarSort} slug="sort" />
          </StyledSidebarItem>
          <StyledSidebarItem>
            <SidebarDropdownHeading>Completed</SidebarDropdownHeading>
            <Select items={modelsSidebarCompletedFilter} slug="completed" />
          </StyledSidebarItem>
          <StyledSidebarItem>
            <SidebarDropdownHeading>Brand</SidebarDropdownHeading>
            <Select
              query={ALL_MANUFACTURERS_QUERY}
              slug="company"
              field="company"
            />
          </StyledSidebarItem>
          <StyledSidebarItem>
            <SidebarDropdownHeading>Scale</SidebarDropdownHeading>
            <Select query={ALL_SCALES_QUERY} slug="scale" field="scale" />
          </StyledSidebarItem>
          <StyledSidebarItem>
            <SidebarDropdownHeading>Tags</SidebarDropdownHeading>
            <Select query={ALL_MODELS_TAGS_QUERY} slug="tag" field="title" />
          </StyledSidebarItem>
        </Sidebar>

        <Query<iData>
          query={MODELS_QUERY}
          variables={{
            start: page * PER_PAGE - PER_PAGE,
            limit: 100,
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
            if (data !== undefined) {
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
            }

            return (
              <Fragment>
                <StyledModelListings
                  pose={isOpen ? `visible` : `invisible`}
                  initialPose="invisible"
                >
                  {data !== undefined && data.models.map(model => (
                    <ModelListing key={model.id} model={model} />
                  ))}
                </StyledModelListings>
              </Fragment>
            );
          }}
        </Query>
      </StyledModelPage>
    </Main>
  );
};

export default withLayout(
  ModelsPage,
  title,
  description,
  `/models`,
  `clm_me/stash`
);
