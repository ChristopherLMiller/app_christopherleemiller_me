import styled from 'styled-components';
import Link from 'next/link';

const StyledTitle = styled.h2`
  text-align: right;
  font-size: 2em;
  margin: 0;

  position: relative;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: ${props => props.theme.small}) {
    text-align: left;
    margin: 10px 0;
    font-size: 1.75em;
  }
  @media (min-width: ${props => props.theme.med_small}) {
    font-size: 2.2em;
  }
  @media (min-width: ${props => props.theme.med_large}) {
    font-size: 2.6em;
  }
  @media (min-width: ${props => props.theme.large}) {
    font-size: 3em;
  }
`;

const StyledDescription = styled.h3`
  margin: 0 0 30px 0;
  text-align: right;

  @media (min-width: ${props => props.theme.small}) {
    text-align: left;
    display: initial;
    font-size: 1em;
  }
  @media (min-width: ${props => props.theme.med_small}) {
    font-size: 1.25em;
  }
  @media (min-width: ${props => props.theme.med_large}) {
    font-size: 1.5em;
  }
  @media (min-width: ${props => props.theme.large}) {
    font-size: 1.75em;
  }
`;

const Block = styled.span`
  color: ${props => props.theme.red};
`;

const Title = () => (
  <>
    <Link href="/">
      <a>
        <StyledTitle>
          <Block>C</Block>hristopher <Block>L</Block>
          ee <Block>M</Block>iller
        </StyledTitle>
      </a>
    </Link>
    <StyledDescription>All About Me!</StyledDescription>
  </>
);

export default Title;
