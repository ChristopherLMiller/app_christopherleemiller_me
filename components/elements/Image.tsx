import { unstable_createResource } from 'react-cache';
import { Suspense } from 'react';

const ImageResource = unstable_createResource(
  (source: string) =>
    new Promise(resolve => {
      const img = new Image();
      img.src = source;
      img.onload = resolve;
    })
);

interface iImage {
  src: string;
  alt: string;
}

export const Img = ({ src, alt, ...props }: iImage) => {
  ImageResource.read(src);
  return <img src={src} alt={alt} {...props} />
}



const ImageComponent = ({ image, alt, render }: any) => (
  render ?
    <div>
      <Suspense fallback={
        <div>
          <img className="blurry" src={image.small} alt={alt} />
          <span>Loading...</span>
        </div>
      }>
        <div>
          <img src={image.large} alt={alt} />
        </div>
      </Suspense>
    </div>
    :
    <div />
);

export { ImageComponent as Image }