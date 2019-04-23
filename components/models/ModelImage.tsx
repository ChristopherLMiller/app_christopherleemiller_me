import { ImageURL } from '../../utils/functions';
import { ModelTypes } from './Types';
import { SFC } from 'react';
import { StyledModelImage } from '../styles/Models';

const ModelImage: SFC<ModelTypes> = ({ model }) => (
  <StyledModelImage src={ImageURL(model.featured_image, 700)} />
)

export { ModelImage };