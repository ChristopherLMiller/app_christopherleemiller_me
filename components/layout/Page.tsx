import { FunctionComponent, Fragment } from "react";
import styled from "styled-components";
import Meta from "./Meta";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { Props } from "../../styles/Themes";
import { ImageURL } from "../../utils/functions/imageURL";

const StyledPage = styled.div`
  color: var(--text-color-light);
  transition: all 0.5s;

  :before {
    content: '';
    position: fixed;
    transform: scale(1.1);
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background-image: url('${ImageURL("clm_me/assets/background.jpg")}');
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    grid-template-columns: 350px 1fr;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    grid-template-columns: 350px 1fr;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    grid-template-columns: 400px 1fr;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    grid-template-columns: 450px 1fr;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

interface PageProps {
  children: object;
  router?: {
    route: any;
  };
}

const Page: FunctionComponent<PageProps> = ({ children }) => (
  <Fragment>
    <StyledPage>
      <Meta />
      <Sidebar />
      <Inner>{children}</Inner>
    </StyledPage>
    <MobileNav />
  </Fragment>
);

export default Page;
