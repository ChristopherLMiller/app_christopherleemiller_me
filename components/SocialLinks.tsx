import SocialIcon from './SocialIcon';
import styled from 'styled-components';
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const SocialLinksBar = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-around;
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

export default SocialLinks;
