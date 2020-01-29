import posed from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SFC } from 'react';
import styled from 'styled-components';

const SocialIconPosed = posed.span({
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.15,
    transition: {
      type: `spring`,
      stiffness: 100,
      damping: 0,
    },
  },
});

export const SocialIconStyled = styled(SocialIconPosed)`
display: block;
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
    <span>
      <a title={alt} href={url} aria-label={alt}>
        <SocialIconStyled>
          <FontAwesomeIcon icon={icon} color={color} />
        </SocialIconStyled>
      </a>
    </span>
  );

export { SocialIcon };
