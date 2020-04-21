import styled from 'styled-components';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

const StyledTitle = styled(motion.h2)`
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

const ListingTitleVariants = {
  enter: {
    rotate: -4,
    translateY: 40,
    translateX: -5,
    scale: 1.1
  }
}

const ListingTitleWhileHover = {
  rotate: 0,
  translateY: 40,
  translateX: 0,
  scale: 1.1
}
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
      <StyledTitle whileHover={ListingTitleWhileHover} variants={ListingTitleVariants}>{children}</StyledTitle>
    </a>
  </Link>
);

export { ListingTitle };
