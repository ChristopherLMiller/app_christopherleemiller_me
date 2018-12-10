import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-size: 3em;
  margin: 0 0 10px 0;
  position: relative;

  &:after {
    content: '\\A';
    position: absolute;
    display: block;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 4px;
    transition: all 0.25s ease;
  }
  &:hover:after {
    width: 375px;
    color: ${props => props.theme.white};
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
    <StyledTitle>
      <Block>C</Block>hristopher <Block>L</Block>
      ee <Block>M</Block>iller
    </StyledTitle>
    <StyledDescription>All About Me!</StyledDescription>
  </>
);

export default Title;
