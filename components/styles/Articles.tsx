import styled from 'styled-components';
import { Props } from './Themes';


const StyledArticle = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  color: black;
  font-family: 'Special Elite', sans-serif;
  max-width: ${(props: Props) => props.theme.max_width};
  margin: 50px auto;
`;

const StyledArticleBody = styled.div`
  padding: 40px 20px;
  font-size: 1.25em;
  letter-spacing: 1px;

  ol {
    list-style-type: decimal;
    padding-left: 25px;
    list-style-position: inside;
    margin-bottom: 15px;
  }
  ul {
    list-style-type: circle;
    padding-left: 25px;
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
