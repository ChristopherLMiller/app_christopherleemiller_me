import styled from "styled-components";
import Link from "next/link";
import { getYear } from "date-fns";
import { Grid, GridItem } from "components/elements/GridLayout";
import { theme } from "styles/Themes";
import { SocialLinks } from "components/SocialLinks";

const SiteFooter = styled.footer`
  background: var(--background-intermediate);
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem;
`;

const SiteInfo = styled.div`
  text-align: right;
  background: var(--background-darker);
  padding: 2rem;
`;

const Separator = styled.span`
  content: "\\A";
  border: 1px solid var(--background-dark);
  margin: auto 10px;
`;

const FooterHeading = styled.h4`
  color: var(--background-darker);
  font-size: 4rem;
  line-height: 1rem;
  margin: 0;
`;

const FooterSubHeading = styled.p`
  color: var(--background-darker);
`;

const Footer = () => (
  <SiteFooter>
    <FooterContent>
      <Grid
        columns={2}
        gap={"30px"}
        background={theme.colors.grey_intermediate}
      >
        <GridItem>
          <FooterHeading>Follow Me</FooterHeading>
          <FooterSubHeading>
            Be sure to see the latest and greatest all the time
          </FooterSubHeading>
          <SocialLinks color={theme.colors.grey_darkest} />
        </GridItem>
        <GridItem>
          <FooterSubHeading>
            Use of this site constitues acceptance of our{" "}
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            . The material on this site may not be reproduced, distributed,
            transmitted, cached or otherwise used, except with prior written
            permission of Christopher Lee Miller.
          </FooterSubHeading>
          <FooterSubHeading>
            Copyright © {getYear(new Date())}
            <Separator />v{process.env.npm_package_version}
          </FooterSubHeading>
        </GridItem>
      </Grid>
    </FooterContent>
    <SiteInfo />
  </SiteFooter>
);

export { Footer };
