import posed from 'react-pose';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SFC } from 'react';

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
      <SocialIconPosed className="fa-stack fa-2x">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x"
          color="#982929"
        />
        <FontAwesomeIcon icon={icon} color={color} className="fa-stack-1x" />
      </SocialIconPosed>
    </a>
  </li>
);

export { SocialIcon };
