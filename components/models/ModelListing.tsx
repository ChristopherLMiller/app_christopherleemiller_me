import { SFC } from 'react';
import { ModelInfo } from './ModelInfo';
import { ModelTypes } from './Types';
import { StyledModelListing } from '../styles/Models';
import { FeaturedImage } from '../FeaturedImage';

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <FeaturedImage image={model.featured_image} width={700} alt={model.title} />
    <ModelInfo model={model} />
  </StyledModelListing>
);

export { ModelListing };
