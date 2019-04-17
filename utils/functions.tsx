import { CLOUDINARY_URL, CLOUDINARY_CLOUD, CLOUDINARY_FOLDER } from '../config';

export function ImageURL(file = "assets/default", width = 300, transform = "c_scale", quality = "q_auto") {
  return `${CLOUDINARY_URL}/${transform},w_${width},${quality}/${CLOUDINARY_CLOUD}/${CLOUDINARY_FOLDER}/${file}`;
}