import { FunctionComponent } from "react";
// @ts-ignore
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";
import { CLOUDINARY_CLOUD } from "../../config";

export interface iImageOptions {
  width?: number; // width
  height?: number; // height
  crop?: string; // crop
  aspectRatio?: string;
  gravity?: string;
  zoom?: number;
  xCoord?: number;
  yCoord?: number;
  format?: string;
  quality?: number | string;
  radius?: string;
  angle?: string;
  effect?: string;
  opacity?: string;
  border?: string;
  background?: string;
  overlay?: string;
  underlay?: string;
  delay?: number;
  color?: string;
  colorSpace?: string;
  dpr?: string;
  page?: string;
  density?: string;
  flags?: string;
  transformation?: string;
}

interface iImage {
  file?: string;
  alt?: string;
  options?: iImageOptions;
}

const Image: FunctionComponent<iImage> = ({ file, options }) => {
  return (
    <CloudinaryImage
      cloudName={CLOUDINARY_CLOUD}
      publicId={file}
      responsive
      dpr="auto"
      responsiveUseBreakpoints="true"
    >
      {(options?.width || options?.height) && (
        <Transformation
          width={options?.width}
          height={options?.height}
          crop={options?.crop || "scale"}
        />
      )}

      <Transformation
        quality={options?.quality || "auto"}
        format={options?.format || "auto"}
      />

      {options?.border && <Transformation border={options?.border} />}
    </CloudinaryImage>
  );
};

export { Image };
