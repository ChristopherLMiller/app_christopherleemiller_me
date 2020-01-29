import styled from 'styled-components';
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { SocialIcon } from './SocialIcon';
import { SFC } from 'react';

const SocialLinksBar = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 50%;
    margin: 0 auto;
    font-size: 4rem;
    grid-gap: 40px;
`;

interface iSocialLinks {
  color: string;
}

const SocialLinks: SFC<iSocialLinks> = ({ color }) => (
  <SocialLinksBar>
    <SocialIcon
      url="https://www.facebook.com/christopher.lee.miller517"
      icon={faFacebookF}
      alt="Facebook"
      color={color}
    />
    <SocialIcon
      url="https://github.com/ChristopherLMiller"
      icon={faGithubAlt}
      alt="Github"
      color={color}
    />
    <SocialIcon
      url="https://www.linkedin.com/in/christopher-l-miller"
      icon={faLinkedinIn}
      alt="LinkedIn"
      color={color}
    />
    <SocialIcon
      url="https://twitter.com/ChrisLMiller_me"
      icon={faTwitter}
      alt="Twitter"
      color={color}
    />
  </SocialLinksBar>
);

export { SocialLinks };
