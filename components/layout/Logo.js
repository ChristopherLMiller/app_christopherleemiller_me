import styled from "styled-components";

const StyledLogo = styled.img`
  border: 10px solid ${props => props.theme.white};
  filter: grayscale(100%);
  transition: all 0.5s;

  &:hover {
    filter: grayscale(0%);
  }
`;
const Logo = () => (
  <StyledLogo src="https://res.cloudinary.com/christopherleemiller/image/upload/c_scale,w_300/v1544466783/clm_me/assets/logo.png" />
);

export default Logo;
