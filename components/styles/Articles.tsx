import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from './Themes';

const PosedArticle = posed.div({
  visible: {
    opacity: `1.0`,
  },
  invisible: {
    opacity: `0.0`,
  },
});

const StyledArticle = styled(PosedArticle)`
  background: ${(props: Props) => props.theme.colors.grey};
  color: black;
  font-family: 'Special Elite', sans-serif;
  max-width: ${(props: Props) => props.theme.max_width};
  margin: 50px auto;
  transition-delay: 2s;
  transition: all 0.25s;
  opacity: 1;
`;

const StyledArticleBody = styled.div`
  padding: 40px 20px;
  font-size: 1.25em;
  letter-spacing: 1px;

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
  }
  a {
    color: ${(props: Props) => props.theme.colors.red};
    text-decoration: underline;
  }
  h1 {
    font-size: 1.5em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h2 {
    font-size: 1.4em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h3 {
    font-size: 1.3em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h4 {
    font-size: 1.25em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h5 {
    font-size: 1.15em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h6 {
    font-size: 1.1em;
    margin: 10px 0;
    font-weight: bolder;
  }
  strong {
    font-weight: bold;
    text-decoration: underline;
  }
  em {
    font-style: italic;
  }
  pre {
    border: 5px solid ${(props: Props) => props.theme.colors.red};
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


  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding: 40px;
  }
`;

const StyledArticleHeader = styled.div`
  h2 {
    font-size: 1.75em;
    letter-spacing: 3px;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const StyledArticleHeaderImage = styled.img`
  object-fit: fill;
  display: block;
  width: 100%;
  max-height: 300px;
  border: 3px solid ${(props: Props) => props.theme.colors.white};
`;

const StyledArticleHeaderInfo = styled.div`
  background: ${(props: Props) => props.theme.colors.red};
  padding: 20px;
  margin: 0;
  color: ${(props: Props) => props.theme.colors.grey};

  a:hover {
    text-decoration: underline;
  }
`;

const StyledArticleFooter = styled.div`
  background: ${(props: Props) => props.theme.colors.grey_darker};
  padding: 20px;
  margin: 0;
`;

const StyledReadMore = styled.p`
  background: ${(props: Props) => props.theme.colors.red};
  padding: 5px;
  transform: skew(-20deg);
  text-align: center;
  max-width: 200px;

  a {
    color: ${(props: Props) => props.theme.colors.white};
  }
`;
export {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
  StyledArticleFooter,
  StyledReadMore,
};
