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
`;

const StyledArticleHeader = styled.div`
  h2 {
    background: ${props => props.theme.red};
    padding: 20px;
    margin: 0;
    color: ${props => props.theme.grey};
    font-size: 1.75em;
    letter-spacing: 3px;
  }
`;

const StyledArticleHeaderImage = styled.img`
  object-fit: cover;
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

export {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
};
