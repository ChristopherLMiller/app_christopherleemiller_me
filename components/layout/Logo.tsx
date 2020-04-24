import styled from "styled-components";
import { Props } from "../../styles/Themes";

const StyledLogo = styled.img`
  border: 10px solid var(--text-color-light);
  transition: all 0.5s;
  display: none;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    width: 45%;
    display: block;
  }
`;

const Logo = () => (
  <StyledLogo
    src="https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300/v1544466783/clm_me/assets/logo.png"
    alt="Self-Portrait of me"
    loading="lazy"
  />
);

export default Logo;
