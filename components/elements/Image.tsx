import { FunctionComponent } from "react"
import styled from 'styled-components';
import { ImageURL, iImageOptions } from "../../utils/functions/imageURL"

interface iStyledImage {
  border?: boolean;
}

const StyledImage = styled.img<iStyledImage>`
  object-fit: fill;
  display: block;
  width: 100%;
  border: ${props => (props.border ? `3px` : `0`)} solid var(--text-color-light);
`;

interface iImage {
  file?: string;
  alt?: string;
  options?: iImageOptions;
  border?: boolean;
}

const Image:FunctionComponent<iImage> = ({alt, file, options, border}) => (
  <StyledImage src={ImageURL(file, options)} alt={alt || file} border={border}/>
)

export { Image }