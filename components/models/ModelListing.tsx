import ModelTypes from './Types';
import { StyledModelListing } from '../styles/Models';
import ModelImage from './ModelImage';
import ModelInfo from './ModelInfo';

const ModelListing: SFC<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <ModelImage model={model} />
    <ModelInfo model={model} />
    {console.log(model)}
  </StyledModelListing>
);

export default ModelListing;