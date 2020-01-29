import styled from "styled-components";
import Link from 'next/link';
import { getYear } from 'date-fns';
import { Grid, GridItem } from "../elements/GridLayout";
import { theme } from "../../styles/Themes";
import { SocialLinks } from "../SocialLinks";

const SiteFooter = styled.footer`
  background: var(--background-intermediate);
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem;
  padding-top: 0;
`;

const SiteInfo = styled.div`
  text-align: right;
  background: var(--background-darker);
  padding: 2rem;
`;

const Separator = styled.span`
  content: '\\A';
  border: 1px solid var(--text-color-light);
  margin: auto 10px;
`;

const FooterHeading = styled.h4`
  color: var(--background-darker);
  font-size: 4rem;
  line-height: 1rem;
`;

const Footer = () => (
  <SiteFooter>
    <FooterContent>
      <Grid columns={2} gap={"2rem"} background={theme.colors.grey_intermediate}>
        <GridItem>
          <FooterHeading>Follow Me</FooterHeading>
          <SocialLinks color={theme.colors.grey_darkest} />
        </GridItem>
        <div>
          <p>SOcial Media Icons</p>
        </div>
      </Grid>
    </FooterContent>
    <SiteInfo>
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
      <Separator />
      <span>Copyright © {getYear(new Date())}</span>
      <Separator />
      <span>v{process.env.npm_package_version}</span>
    </SiteInfo>
  </SiteFooter>
)

export { Footer };

/*
import posed from 'react-pose';
import {Paper} from '../Paper';

const FooterPopped = posed.footer({
  closed: {
  transform: `rotateX(-90deg)`,
},
open: {
  delay: 750,
transform: `rotateX(0deg)`,
},
});

const StyledFooter = styled(FooterPopped)`
padding: 30px 10px;
position: relative;
overflow-y: hidden;
min-height: 215px;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;

const SiteInfo = styled.div`
font-family: var(--font-main);
color: var(--text-color-light);
`;

const Separator = styled.span`
content: '\\A';
border: 1px solid var(--text-color-light);
margin: auto 10px;
`;
const Footer = () => (
<StyledFooter initialPose="closed" pose="open">

  <div>
    <SiteInfo>
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
      <Separator />
      <span>Copyright © {getYear(new Date())}</span>
      <Separator />
      <span>v{process.env.npm_package_version}</span>
    </SiteInfo>
  </div>
</StyledFooter>
);

export default Footer;
*/