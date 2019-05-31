import Link from 'next/link';
import styled from 'styled-components';
import { getYear } from 'date-fns';
import posed from 'react-pose';
import { Props } from '../styles/Themes';

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
  background: ${(props: Props) => props.theme.colors.red_transparent};
  padding: 30px 10px;
  position: sticky;
  transform: rotateX(-90deg);
`;
const SiteInfo = styled.div`
  font-family: Roboto;
  color: ${(props: Props) => props.theme.colors.white};
`;

const Separator = styled.span`
  content: '\\A';
  border: 1px solid ${(props: Props) => props.theme.colors.white};
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
