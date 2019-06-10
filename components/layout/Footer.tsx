import Link from 'next/link';
import styled from 'styled-components';
import { getYear } from 'date-fns';
import posed from 'react-pose';

const FooterPopped = posed.footer({
  open: {
    transform: `rotateX(0deg)`,
    delay: 750,
  },
  closed: {
    transform: `rotateX(-90deg)`,
  },
});

const StyledFooter = styled(FooterPopped)`
  background: var(--main-color-transparent);
  padding: 30px 10px;
  position: sticky;
`;
const SiteInfo = styled.div`
  font-family: var(--font-family);
  color: var(--text-color-light);
`;

const Separator = styled.span`
  content: '\\A';
  border: 1px solid var(--text-color-light);
  margin: auto 10px;
`;
const Footer = () => (
  <StyledFooter initialPose="closed" pose="open">
    <SiteInfo>
      <Link href="/privacy-policy" prefetch>
        <a>Privacy Policy</a>
      </Link>
      <Separator />
      <span>Copyright © {getYear(new Date())}</span>
    </SiteInfo>
  </StyledFooter>
);

export default Footer;
