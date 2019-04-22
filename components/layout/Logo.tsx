import styled from 'styled-components';
import { Props } from '../styles/Themes';

const StyledLogo = styled.img`
  border: 10px solid ${(props: Props) => props.theme.colors.white};
  filter: grayscale(100%);
  transition: all 0.5s;
  display: none;

  &:hover {
    filter: grayscale(0%);
  }

  @media screen and (min-width: ${(props: Props) => props.theme.sizes.small}) {
    width: 66%;
    display: block;
  }
`;
const Logo = () => (
  <StyledLogo
    src="https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300/v1544466783/clm_me/assets/logo.png"
    alt="Self-Portrait of me"
  />
);

export default Logo;
