import styled from 'styled-components';
import { Props } from '../../styles/Themes';

const StyledContentBlock = styled.div`
  padding: 40px 20px;
  font-size: var(--font-size-responsive);
  letter-spacing: 1px;
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
    letter-spacing: 1px;
    text-indent: 1.25em;
  }

  p:first-of-type {
    margin-top: 0;
  }
  a {
    color: var(--main-color)
    text-decoration: underline;
  }
  h3,h4,h5,h6 {
    margin: 10px 0;
    font-weight: bolder;
    text-align: center;
    color: var(--background-intermediate);
    border-bottom: 2px solid var(--main-color-transparent);
    border-top: 2px solid var(--main-color-transparent);
    margin-top: 4rem;
  }
  h3 {
    font-size: 3rem;
    line-height: 5rem;
    transform: skewX(10deg);
  }
  h4 {
    font-size: 2.5rem;
    line-height: 4rem;
    transform: skewX(10deg);
  }
  h5 {
    font-size: 2rem;
    line-height: 3rem;
    transform: skewX(10deg);
  }
  h6 {
    font-size: 1.5rem;
    line-height: 2rem;
    transform: skewX(10deg);
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

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #abb2bf;
    background: #282c34;
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding: 40px;
  }
`;

export { StyledContentBlock };
