import styled from 'styled-components';
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from './SocialIcon';
import { Props } from '../styles/Themes';

const SocialLinksBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin: 0;
  padding: 20px 0;
  padding-bottom: 50px;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    padding-bottom: 0px;
  }
`;
const SocialLinks = () => (
  <SocialLinksBar>
    <SocialIcon
      url="https://www.facebook.com/christopher.lee.miller517"
      icon={faFacebookF}
      alt="Facebook"
    />
    <SocialIcon
      url="https://github.com/ChristopherLMiller"
      icon={faGithubAlt}
      alt="Github"
    />
    <SocialIcon
      url="https://www.linkedin.com/in/christopher-l-miller"
      icon={faLinkedinIn}
      alt="LinkedIn"
    />
    <SocialIcon
      url="https://twitter.com/ChrisLMiller_me"
      icon={faTwitter}
      alt="Twitter"
    />
  </SocialLinksBar>
);

export { SocialLinks };
