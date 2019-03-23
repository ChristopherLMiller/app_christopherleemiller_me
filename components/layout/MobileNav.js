import styled from 'styled-components';
import Link from 'next/link';

const StyledMobileNav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  z-index: 2;
  background: ${props => props.theme.black};
  border-bottom: 2px solid ${props => props.theme.grey};
  position: fixed;

  @media screen and (min-width: ${props => props.theme.small}) {
    display: none;
  }
`;

const StyledMobileNavWrapper = styled.div`
  position: relative;
`;

const StyledTitle = styled.h2`
  text-align: right;
  font-size: 2em;
  margin: 0;
  padding: 0;
  vertical-align: top;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledDescription = styled.h3`
  margin: 0;
  text-align: right;
  color: ${props => props.theme.white};
`;

const Block = styled.span`
  color: ${props => props.theme.red};
`;

const StyledHamburger = styled.button`
  text-transform: uppercase;
  background: none;
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.red};
  padding: 12px;
  position: absolute;
  font-size: 1.5em;
`;

const MobileNav = () => (
  <StyledMobileNav>
    <StyledMobileNavWrapper>
      <StyledHamburger>Menu</StyledHamburger>
      <Link href="/">
        <a>
          <StyledTitle>
            <Block>C</Block>hristopher <Block>L</Block>
            ee <Block>M</Block>iller
          </StyledTitle>
        </a>
      </Link>
      <StyledDescription>All About Me!</StyledDescription>
    </StyledMobileNavWrapper>
  </StyledMobileNav>
);

export default MobileNav;
