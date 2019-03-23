import styled from 'styled-components';
import Link from 'next/link';
import { getYear } from 'date-fns';

const StyledFooter = styled.footer`
  background: ${props => props.theme.red_transparent};
  padding: 30px 10px;
  position: sticky;
`;
const SiteInfo = styled.div`
  font-family: monospace;
  color: ${props => props.theme.white};
  text-decoration: none;
  text-transform: uppercase;
`;
const Separator = styled.span`
  content: '\\A';
  border: 1px solid ${props => props.theme.white};
  margin: auto 10px;
`;
const Footer = () => (
  <StyledFooter>
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
