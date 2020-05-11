import {
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD,
  SITE_DEFAULT_IMAGE_FILE,
} from "config";

export interface iImageOptions {
  w?: number; // width
  h?: number; // height
  c?: string; // crop
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

export function imageURL(file?: string, options?: iImageOptions): string {
  // check some conditions first like being null
  if (file == null || file === undefined || file == "default")
    file = SITE_DEFAULT_IMAGE_FILE;

  const optionsString = options
    ? Object.entries(options)
        .map((option) => `${option[0]}_${option[1]}`)
        .join(",")
    : "";

  //return `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/${file}`;
  return `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload${
    options ? "/" : ""
  }${optionsString}/${file}`;
}
