import styled from "styled-components";
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "./SocialIcon";
import { FunctionComponent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const SocialLinksBar = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 30px;
  align-items: center;
`;

interface iSocialLinks {
  color: string;
}

const SocialLinks: FunctionComponent<iSocialLinks> = ({ color }) => (
  <SocialLinksBar>
    <SocialIcon
      url="https://www.facebook.com/christopher.lee.miller517"
      icon={faFacebookF as IconProp}
      alt="Facebook"
      color={color}
    />
    <SocialIcon
      url="https://github.com/ChristopherLMiller"
      icon={faGithubAlt as IconProp}
      alt="Github"
      color={color}
    />
    <SocialIcon
      url="https://www.linkedin.com/in/christopher-l-miller"
      icon={faLinkedinIn as IconProp}
      alt="LinkedIn"
      color={color}
    />
    <SocialIcon
      url="https://twitter.com/ChrisLMiller_me"
      icon={faTwitter as IconProp}
      alt="Twitter"
      color={color}
    />
  </SocialLinksBar>
);

export { SocialLinks };
