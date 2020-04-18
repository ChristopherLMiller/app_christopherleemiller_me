import styled from 'styled-components';
import { Props } from '../../styles/Themes';

interface iGrid {
  columns: number;
  background?: string;
  gap?: string;
}

export const Grid = styled.div<iGrid>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${props => props.gap};
  background: ${props => props.background};

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    grid-template-columns: repeat(${props => props.columns}, 1fr);
  }
`;

interface iGridItem {
  maxWidth?: string;
}
export const GridItem = styled.div<iGridItem>`
  max-width: ${props => props.maxWidth};
`;