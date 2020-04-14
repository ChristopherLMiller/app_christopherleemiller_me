import {
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD,
  CLOUDINARY_VERSION,
  SITE_DEFAULT_IMAGE_FILE,
  CLOUDINARY_FOLDER
} from '../../config';

export function ImageURL(
  file = `assets/default`,
  width = 300,
  transform = `c_scale`,
  quality = `q_auto`
): string {
  // check some conditions first like being null
  if (file == null) file = SITE_DEFAULT_IMAGE_FILE;

  return `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/${transform},w_${width},${quality},f_auto/${CLOUDINARY_VERSION}/${CLOUDINARY_FOLDER}/${file}`;
}
