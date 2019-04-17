import styled from 'styled-components';
import { Props } from './Themes';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  background: ${(props: Props) => props.theme.colors.red};
  color: ${(props: Props) => props.theme.colors.white};
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${(props: Props) => props.theme.colors.grey_darker};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
