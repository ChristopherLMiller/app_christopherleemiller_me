import styled from 'styled-components';
import Link from 'next/link';

const StyledTitle = styled.h2`
  margin: 0 0 10px 0;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: ${props => props.theme.small}) {
    font-size: 30px;
  }
  @media (min-width: ${props => props.theme.med_small}) {
    font-size: 32px;
  }
  @media (min-width: ${props => props.theme.med}) {
    font-size: 34px;
  }
  @media (min-width: ${props => props.theme.med_large}) {
    font-size: 38px;
  }
  @media (min-width: ${props => props.theme.large}) {
    font-size: 46px;
  }
`;

const StyledDescription = styled.h3`
  font-size: 1.75em;
  margin: 0;
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
