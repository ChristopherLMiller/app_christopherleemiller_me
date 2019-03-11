import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import posed from 'react-pose';

const Enlarge = posed.span({
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.2,
  },
});
const SocialIconSpan = styled(Enlarge)``;

const SocialIcon = props => (
  <Link href={props.url}>
    <a>
      <SocialIconSpan className="fa-stack fa-2x">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x"
          color="#982929"
        />
        <FontAwesomeIcon icon={props.icon} className="fa-stack-1x" />
      </SocialIconSpan>
    </a>
  </Link>
);

SocialIcon.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
export default SocialIcon;
