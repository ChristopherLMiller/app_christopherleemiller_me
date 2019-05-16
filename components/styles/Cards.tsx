import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from './Themes';

const CardPopTransition = posed.div({
  enter: {
    opacity: `1`,
  },
  exit: {
    opacity: `0`,
  },
});

const StyledCard = styled(CardPopTransition)`
  color: black;
  font-family: 'Special Elite', sans-serif;
  max-width: 1000px;
  margin: 25px auto;
  opacity: 0;
  transition: all 0.25s;
  transition-delay: 1s;
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
