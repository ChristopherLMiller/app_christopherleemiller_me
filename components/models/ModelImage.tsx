import ModelTypes from "./Types";
import { ImageURL } from "../../utils/functions";

const ModelImage: SFC<ModelTypes> = ({ model }) => (
  <img src={ImageURL(model.featured_image, 100)} />
)

export default ModelImage;