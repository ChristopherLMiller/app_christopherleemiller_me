import { SFC } from 'react';
import { ModelTypes } from './Types';
import { StyledModelListing } from '../../styles/Models';
import { ListingTitle } from './elements/ListingTitle';
import { Polaroid } from '../Polaroid';
import { ModelInfo } from './ModelInfo';

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <ListingTitle
      as={`/model/${model.slug}`}
      href={`/model?slug=${model.slug}`}
    >
      {model.title}
    </ListingTitle>
    <Polaroid
      image={model.featured_image}
      link={{ as: `/model/${model.slug}`, href: `/model?slug=${model.slug}` }}
    >
      <ModelInfo model={model} />
    </Polaroid>
  </StyledModelListing>
);

export { ModelListing };
