import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

export const SocialIconStyled = styled(motion.span)`
  display: block;

  svg {
    max-height: 75px;
  }
`;

const hoverState = {
  scale: 1.15,
  rotate: Math.round(Math.random() * 40) - 20,
};

const transition = {
  type: "spring",
};

interface SocialIconProps {
  url: string;
  icon: IconProp;
  color?: string;
  alt: string;
}
const SocialIcon: FunctionComponent<SocialIconProps> = ({
  url,
  icon,
  color = `#FFFFFF`,
  alt,
}) => (
  <a title={alt} href={url} aria-label={alt}>
    <SocialIconStyled whileHover={hoverState} transition={transition}>
      <FontAwesomeIcon icon={icon} color={color} />
    </SocialIconStyled>
  </a>
);

export { SocialIcon };
