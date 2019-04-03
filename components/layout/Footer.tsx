import Link from 'next/link';
import styled from 'styled-components';
import { getYear } from 'date-fns';
import { Props } from '../styles/Themes';

const StyledFooter = styled.footer`
  background: ${(props: Props) => props.theme.colors.red_transparent};
  padding: 30px 10px;
  position: sticky;
`;
const SiteInfo = styled.div`
  font-family: monospace;
  color: ${(props: Props) => props.theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
`;
const Separator = styled.span`
  content: '\\A';
  border: 1px solid ${(props: Props) => props.theme.colors.white};
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
