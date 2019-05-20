import styled from 'styled-components';
import { SFC } from 'react';
import { ImageURL } from '../utils/functions';
import { Props } from '../components/styles/Themes';

const StyledFeaturedImage = styled.img`
  object-fit: fill;
  display: block;
  width: 100%;
  max-height: 300px;
  border: 3px solid ${(props: Props) => props.theme.colors.white};
`;

interface FeaturedImageTypes {
  image: string;
  width: number;
  alt: string;
}
const FeaturedImage: SFC<FeaturedImageTypes> = ({ image, width, alt }) => (
  <StyledFeaturedImage src={ImageURL(image, width)} alt={alt} />
);

export { FeaturedImage };
