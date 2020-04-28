import styled from "styled-components";
import { Props } from "../../../styles/Themes";
import { Image } from "../../elements";

const StyledLogo = styled.div`
  img {
    border: 10px solid var(--text-color-light);
    transition: all 0.5s;
    display: none;

    @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
      width: 45%;
      display: block;
    }
  }
`;

const Logo = () => (
  <StyledLogo>
    <Image file="clm_me/assets/logo" options={{ width: 300 }} />
  </StyledLogo>
);

export default Logo;
