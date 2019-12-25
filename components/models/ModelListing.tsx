import { SFC } from 'react';
import styled from 'styled-components';
import { ModelTypes } from './Types';
import { StyledModelListing } from '../../styles/Models';
import { ListingTitle } from './elements/ListingTitle';
import { Polaroid } from '../Polaroid';
import { BuildTime } from './elements/BuildTime';

const InfoPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-gap: 0 15px;

  & span:first-child,
  & span:last-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <ListingTitle
      as={`/model/${model.slug}`}
      href={`/model?slug=${model.slug}`}
    >
      {model.title} {(model.status === 'DRAFT' || model.status === 'UNPUBLISHED') && `*${model.status}*`}
    </ListingTitle>
    <Polaroid
      image={model.featured_image}
      link={{ as: `/model/${model.slug}`, href: `/model?slug=${model.slug}` }}
    >
      <InfoPanel>
        <span>Brand: {model?.manufacturer?.company}</span>
        <span>Kit Number: {model?.kit_number}</span>
        <span>Scale: {model?.scale?.scale}</span>
        <span>Released: {model?.year_released}</span>
        <span>Completed: {model?.completed ? `Yes` : `No`}</span>
        <span>
          Build Time: <BuildTime id={model?.clockify_id} />
        </span>
      </InfoPanel>
    </Polaroid>
  </StyledModelListing>
);

export { ModelListing };
