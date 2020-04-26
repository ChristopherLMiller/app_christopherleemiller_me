import { FunctionComponent } from "react";
import { iImageOptions } from "../../utils/functions/imageURL";
// @ts-ignore
import { Image as CloudinaryImage } from "cloudinary-react";
import { CLOUDINARY_CLOUD } from "../../config";

interface iImage {
  file?: string;
  alt?: string;
  options?: iImageOptions;
}

const Image: FunctionComponent<iImage> = ({ file, options }) => (
  <CloudinaryImage
    cloudName={CLOUDINARY_CLOUD}
    publicId={file}
    responsive
    dpr="auto"
    crop="scale"
    responsiveUseBreakpoints="true"
    width={options?.w}
  />
);

export { Image };
