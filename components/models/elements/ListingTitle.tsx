import posed from 'react-pose';
import styled from 'styled-components';
import Link from 'next/link';

const ModelListingTitleHover = posed.h2({
  hoverable: true,
  init: {
    transform: `rotate(-4deg) translateY(40px) translateX(-5px) scale(1.1)`,
  },
  hover: {
    transform: `rotate(0deg) translateY(40px) translateX(-5px) scale(1.1)`,
  },
});

const StyledTitle = styled(ModelListingTitleHover)`
  margin: 0;
  padding: 20px;
  background: var(--main-color);
  color: var(--text-color-light);
  font-family: 'Permanent Marker';
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  transform: rotate(-4deg) translateY(40px) translateX(-5px) scale(1.1);
  position: relative;
  z-index: 1;
`;

const ListingTitle = ({ as, href, children }) => (
  <Link as={as} href={href}>
    <a>
      <StyledTitle>{children}</StyledTitle>
    </a>
  </Link>
);

export { ListingTitle };
