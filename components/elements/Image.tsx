import { FunctionComponent } from "react"
import { ImageURL, iImageOptions } from "../../utils/functions/imageURL"

interface iImage {
  file?: string;
  options?: iImageOptions;
}

const Image:FunctionComponent<iImage> = ({file, options}) => (
  <img src={ImageURL(file, options)} />
)

export { Image }