import styled from 'styled-components';
import { Props } from './Themes';

const StyledCard = styled.div`

  color: black;
  font-family: 'Special Elite', sans-serif;
  max-width: 1000px;
  margin: 25px auto;
`;

const StyledCardBody = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  padding: 40px;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;

  a {
    color: ${(props: Props) => props.theme.colors.red};
  }
`;

export { StyledCard, StyledCardBody };
