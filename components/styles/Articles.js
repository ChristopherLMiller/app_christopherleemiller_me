import styled from 'styled-components';

const StyledArticle = styled.div`
  background: ${props => props.theme.grey};
  color: black;
  font-family: 'Special Elite', sans-serif;
  max-width: 1000px;
  margin: 0 auto 50px auto;
`;

const StyledArticleBody = styled.div`
  padding: 40px;
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
    margin: 15px 0;
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
    border: 1px solid ${props => props.theme.red};
    background: ${props => props.theme.white};
    padding: 5px;
    overflow-x: scroll;
    font-family: monospace;
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
  object-fit: cover;
  display: block;
  width: 100%;
  height: 150px;
  border: 3px solid ${props => props.theme.white};

  @media screen and (min-width: ${props => props.theme.med_small}) {
    height: 200px;
  }
  @media screen and (min-width: ${props => props.theme.med}) {
    height: 250px;
    border: 5px solid ${props => props.theme.white};
  }
  @media screen and (min-width: ${props => props.theme.med_large}) {
    height: 325px;
  }
  @media screen and (min-width: ${props => props.theme.large}) {
    height: 400px;
  }
`;

const StyledArticleHeaderInfo = styled.div`
  background: ${props => props.theme.red};
  padding: 20px;
  margin: 0;
  color: ${props => props.theme.grey};
`;

const StyledArticleFooter = styled.div`
  background: ${props => props.theme.grey_darker};
  padding: 20px;
  margin: 0;

  span,
  a {
    font-size: 1.15em;
    font-family: monospace;
  }

  a {
    text-transform: uppercase;
    text-decoration: underline;
  }
  a:after {
    content: ', ';
    color: ${props => props.theme.black};
    text-decoration: none;
  }
  a:last-of-type:after {
    content: '';
  }
`;

export {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
  StyledArticleFooter,
};
