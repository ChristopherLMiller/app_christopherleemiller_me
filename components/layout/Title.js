import styled from 'styled-components';
import Link from 'next/link';

const StyledTitle = styled.h2`
  font-size: 3em;
  margin: 0 0 10px 0;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledDescription = styled.h3`
  font-size: 1.75em;
  margin: 0;
  text-align: right;
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
