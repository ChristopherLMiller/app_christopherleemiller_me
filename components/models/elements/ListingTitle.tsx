import posed from 'react-pose';
import styled from 'styled-components';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const ModelListingTitleHover = posed.h2({
  hoverable: true,
  init: {
    transform: `rotate(4deg) translateY(40px) translateX(0px) scale(1.1)`,
  },
  hover: {
    transform: `rotate(0deg) translateY(40px) translateX(0px) scale(1.1)`,
  },
});

const StyledTitle = styled(ModelListingTitleHover)`
  margin: 0;
  padding: 20px;
  background: var(--main-color);
  color: var(--text-color-light);
  font-family: var(--font-monospace);
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  transform: rotate(-4deg) translateY(40px) translateX(-5px) scale(1.1);
  position: relative;
  z-index: 1;
`;

interface IListingTitle {
  as: string;
  href: string;
}

const ListingTitle: FunctionComponent<IListingTitle> = ({
  as,
  href,
  children,
}) => (
  <Link as={as} href={href}>
    <a>
      <StyledTitle>{children}</StyledTitle>
    </a>
  </Link>
);

export { ListingTitle };
