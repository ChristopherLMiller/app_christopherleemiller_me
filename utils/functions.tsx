import { CLOUDINARY_URL, CLOUDINARY_CLOUD, CLOUDINARY_FOLDER } from '../config';

export function ImageURL(
  file = `assets/default`,
  width = 300,
  transform = `c_scale`,
  quality = `q_auto`
) {
  // check some conditions first like being null
  if (file == null) file = `assets/default`;

  return `${CLOUDINARY_URL}/${transform},w_${width},${quality},f_auto/${CLOUDINARY_CLOUD}/${CLOUDINARY_FOLDER}/${file}`;
}
