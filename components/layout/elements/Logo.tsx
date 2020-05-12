import styled from "styled-components";
import { Props } from "styles/Themes";
import { Image } from "components/elements";

const StyledLogo = styled.div`
  img {
    border: 5px solid var(--text-color-light);
    transition: all 0.5s;
    display: none;

    @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
      width: 100%;
      display: block;
    }
  }
`;

const Logo = () => (
  <StyledLogo>
    <Image file="clm_me/assets/logo" options={{ width: 300 }} alt="Site Logo" />
  </StyledLogo>
);

export default Logo;
