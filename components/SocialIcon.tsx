import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

export const SocialIconStyled = styled(motion.span)`
display: block;
`;

const SocialIconHover = {
  scale: 1.15,
  rotate: Math.round(Math.random() * 40) - 20
}

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
    <SocialIconStyled whileHover={SocialIconHover} transition={{type: 'spring'}}>
      <FontAwesomeIcon icon={icon} color={color} />
    </SocialIconStyled>
  </a>
);

export { SocialIcon };
