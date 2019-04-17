import Link from 'next/link';
import posed from 'react-pose';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SFC } from 'react';

const SocialIconPosed = posed.span({
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.2,
  },
});

interface SocialIconProps {
  url: string,
  icon: string,
  alt: string,
}
const SocialIcon: SFC<SocialIconProps> = ({ url, icon, alt }) => (
  <Link href={url}>
    <a title={alt} aria-label={alt}>
      <SocialIconPosed className="fa-stack fa-2x">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x"
          color="#982929"
        />
        <FontAwesomeIcon icon={icon} className="fa-stack-1x" />
      </SocialIconPosed>
    </a>
  </Link >
);

export default SocialIcon;
