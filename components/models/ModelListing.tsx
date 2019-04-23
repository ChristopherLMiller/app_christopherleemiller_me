import { ModelImage } from './ModelImage';
import { ModelInfo } from './ModelInfo';
import { ModelTypes } from './Types';
import { SFC } from 'react';
import { StyledModelListing } from '../styles/Models';

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <ModelImage model={model} />
    <ModelInfo model={model} />
  </StyledModelListing>
);

export { ModelListing };