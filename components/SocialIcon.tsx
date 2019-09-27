import posed from 'react-pose';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SFC } from 'react';
import styled from 'styled-components';

const SocialIconPosed = posed.span({
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      type: `spring`,
      stiffness: 100,
      damping: 0,
    },
  },
});

const SocialIconStyled = styled(SocialIconPosed)`
  font-size: 2.5rem;
  line-height: 1rem;
  display: flex;
  height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;

  svg {
    position: absolute;
  }
  svg:last-child {
    height: 4rem;
    width: 6rem;
    margin-top: 10px;
  }
`;

interface SocialIconProps {
  url: string;
  icon: IconProp;
  color?: string;
  alt: string;
}
const SocialIcon: SFC<SocialIconProps> = ({
  url,
  icon,
  color = `#FFFFFF`,
  alt,
}) => (
  <li>
    <a title={alt} href={url} aria-label={alt}>
      <SocialIconStyled>
        <FontAwesomeIcon icon={faCircle} color="#982929" />
        <FontAwesomeIcon icon={icon} color={color} />
      </SocialIconStyled>
    </a>
  </li>
);

export { SocialIcon };
