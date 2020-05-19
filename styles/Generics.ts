import styled from "styled-components";
import { Props } from "styles/Themes";

export const Center = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const LeftAlign = styled.div`
  text-align: left;
`;

export const UnorderedList = styled.ul`
  padding-left: 0;
  list-style-position: inside;
  margin-top: 0;
`;

export const Main = styled.main`
  overflow-x: hidden;
  flex-grow: 2;
  position: relative;
  overflow-y: hidden;
  padding: 275px 20px;

  :before,
  :after {
    content: "\\A";
    left: 0;
    width: 100%;
    min-height: 325px;
    position: absolute;
    background: var(--main-color-transparent);
    transition: 0.25s;
  }

  :before {
    top: 0;
    transform: skewY(-5deg) translateY(-40%);
  }

  :after {
    bottom: 0;
    transform: skewY(-5deg) translateY(40%);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    padding: 175px 25px;

    :before {
      min-height: 200px;
    }
    :after {
      min-height: 200px;
    }
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    padding: 175px 30px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    padding: 200px 35px;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    padding: 200px 40px;
  }
`;
