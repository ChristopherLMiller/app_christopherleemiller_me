import styled from "styled-components";
import { Props } from "styles/Themes";

const StyledContentBlock = styled.div`
  padding: 40px 20px;
  font-size: var(--font-size-responsive);
  letter-spacing: -1px;
  font-weight: 300;
  color: var(--background-darker);

  img {
    width: 100%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    img {
      width: calc(50% - 5px);
    }
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    img {
      width: calc(33% - 5px);
    }
  }

  ol {
    list-style-type: decimal;
    padding-left: 0;
    list-style-position: inside;
    margin-bottom: 15px;
  }
  ul {
    list-style-type: circle;
    padding-left: 0;
    list-style-position: inside;
    margin-bottom: 15px;
  }
  p {
    margin: 15px auto;
    letter-spacing: -1px;
    text-indent: 1.25em;
  }

  p > img:first-child {
    margin-left: -1.25em;
  }

  p:first-of-type {
    margin-top: 0;
  }
  a {
    color: var(--main-color);
    text-decoration: underline;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
    font-weight: bolder;
    color: var(--background-intermediate);
    margin-top: 4rem;
    transform: skewX(10deg);
    position: relative;
    border-left: 3px solid var(--main-color);
  }
  h2:after,
  h3:after,
  h4:after,
  h5:after,
  h6:after {
    content: "\\A";
    position: absolute;
    height: 5px;
    background: var(--main-color);
    bottom: 5px;
    left: -10px;
    transform: skewX(10deg);
  }

  h2 {
    font-size: 3.5rem;
    line-height: 6rem;
  }
  h2:after {
    width: 250px;
  }
  h3 {
    font-size: 3rem;
    line-height: 5rem;

    &:after {
      width: 200px;
    }
  }
  h4 {
    font-size: 2.5rem;
    line-height: 4rem;

    &:after {
      width: 175px;
    }
  }
  h5 {
    font-size: 2rem;
    line-height: 3rem;

    &:after {
      width: 150px;
    }
  }
  h6 {
    font-size: 1.5rem;
    line-height: 2rem;

    &:after {
      width: 100px;
    }
  }
  strong {
    font-weight: bold;
    text-decoration: underline;
  }
  em {
    font-style: italic;
  }
  pre {
    border: 1px solid var(--main-color-transparent);
  }
  pre,
  code {
    white-space: pre;
    overflow-x: auto;
  }
  blockquote {
    margin: 0;
    margin-left: 20px;
    padding-left: 10px;
    background: rgba(255, 255, 255, 0.65);
    border-left: 10px solid var(--background-dark);
  }

  img {
    border: 3px solid var(--main-color);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding: 40px;
  }
`;

export { StyledContentBlock };
