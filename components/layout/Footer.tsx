import Link from 'next/link';
import styled from 'styled-components';
import { getYear } from 'date-fns';
import posed from 'react-pose';
import { Paper } from '../Paper';

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
  min-height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SiteInfo = styled.div`
  font-family: var(--font-main);
  color: var(--text-color-light);
  text-align: right;
`;

const Separator = styled.span`
  content: '\\A';
  border: 1px solid var(--text-color-light);
  margin: auto 10px;
`;
const Footer = () => (
  <StyledFooter initialPose="closed" pose="open">
    <SiteInfo>
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
      <Separator />
      <span>Copyright © {getYear(new Date())}</span>
      <Separator />
      <span>v{process.env.npm_package_version}</span>
    </SiteInfo>
    <Paper translate="5%" />
  </StyledFooter>
);

export default Footer;
