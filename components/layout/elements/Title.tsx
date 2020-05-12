import Link from "next/link";
import styled from "styled-components";
import { Props } from "styles/Themes";

const TitleWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  font-family: var(--font-alt);
  border-bottom: 2px solid var(--background-light);

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding: inherit;
    border-bottom: none;
  }
`;

const StyledTitle = styled.h2`
  text-align: right;
  font-size: 3.5rem;
  margin: 0;
  font-variant: petite-caps;
  position: relative;

  :after {
    content: "\\A";
    width: 0%;
    height: 5px;
    background: var(--main-color);
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: all 0.25s;
  }
  :hover:after {
    width: 100%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    text-align: left;
    margin-bottom: 5px;
  }
`;

const StyledDescription = styled.h3`
  margin: 0;
  text-align: right;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    text-align: left;
    display: initial;
    font-size: 1em;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    font-size: 1.25em;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    font-size: 1.5em;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    font-size: 1.75em;
  }
`;

const Block = styled.span`
  color: var(--main-color);
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
