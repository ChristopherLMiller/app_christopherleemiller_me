import ModelTypes from "./Types";
import { ImageURL } from "../../utils/functions";
import { StyledModelImage } from '../styles/Models';

const ModelImage: SFC<ModelTypes> = ({ model }) => (
  <StyledModelImage src={ImageURL(model.featured_image, 700)} />
)

export default ModelImage;