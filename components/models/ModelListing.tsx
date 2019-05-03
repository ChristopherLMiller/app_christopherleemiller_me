import { SFC } from 'react';
import { ModelImage } from './ModelImage';
import { ModelInfo } from './ModelInfo';
import { ModelTypes } from './Types';
import { StyledModelListing } from '../styles/Models';

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <ModelImage model={model} width={700} />
    <ModelInfo model={model} />
  </StyledModelListing>
);

export { ModelListing };
