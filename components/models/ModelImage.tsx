import { SFC } from 'react';
import { ImageURL } from '../../utils/functions';
import { ModelTypes } from './Types';
import { StyledModelImage } from '../styles/Models';

const ModelImage: SFC<ModelTypes> = ({ model, width }) => (
  <StyledModelImage src={ImageURL(model.featured_image, width)} />
);

export { ModelImage };
