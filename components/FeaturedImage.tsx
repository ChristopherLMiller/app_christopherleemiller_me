import styled from 'styled-components';
import { SFC } from 'react';
import { ImageURL } from '../utils/functions';

interface IFeaturedImage {
  max_height?: number;
  border?: boolean;
}

const StyledFeaturedImage = styled.img<IFeaturedImage>`
  object-fit: fill;
  display: block;
  width: 100%;
  max-height: ${props =>
    props.max_height ? `${props.max_height}px` : `initial`};
  border: ${props => (props.border ? `3px` : `0`)} solid var(--text-color-light);
`;

interface FeaturedImageTypes {
  image: {
    public_id: string;
  };
  width?: number;
  alt: string;
  border?: boolean;
  max_height?: number;
}
const FeaturedImage: SFC<FeaturedImageTypes> = ({
  image,
  width,
  max_height,
  alt,
  border = false,
}) => {
  if (image) {
    return (
      <StyledFeaturedImage
        src={ImageURL(image.public_id, width)}
        alt={alt}
        border={border}
        max_height={max_height}
      />
    );
  }
  return (
    <StyledFeaturedImage
      src={ImageURL(`clm_me/assets/default`, width)}
      alt="Default Image"
      border={border}
      max_height={max_height}
    />
  );
};

export { FeaturedImage };
