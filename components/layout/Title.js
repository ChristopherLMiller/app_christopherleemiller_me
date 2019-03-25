import styled from 'styled-components';
import Link from 'next/link';

const TitleWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 2;
  background: ${props => props.theme.black};
  border-bottom: 2px solid ${props => props.theme.grey};

  @media screen and (min-width: ${props => props.theme.small}) {
    padding: inherit;
    z-index: inherit;
    background: inherit;
    border-bottom: none;
  }
`;

const StyledTitle = styled.h2`
  text-align: right;
  font-size: 2em;
  margin: 0;

  position: relative;

  :after {
    content: '\\A';
    width: 0%;
    height: 5px;
    background: ${props => props.theme.white};
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: all 0.25s;
  }
  :hover:after {
    width: 100%;
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
  margin: 0;
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
  <TitleWrapper>
    <Link href="/">
      <a>
        <StyledTitle>
          <Block>C</Block>hristopher <Block>L</Block>
          ee <Block>M</Block>iller
        </StyledTitle>
      </a>
    </Link>
    <StyledDescription>All About Me!</StyledDescription>
  </TitleWrapper>
);

export default Title;
