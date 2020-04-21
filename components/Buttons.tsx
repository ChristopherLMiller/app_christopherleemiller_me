import styled from 'styled-components';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


export const StyledButton = styled(motion.p)`
  background: var(--main-color);
  padding: 10px;
  transition: all 0.25s;
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 2rem;
`;

const ButtonAnchor = styled.a`
  color: var(--text-color-light);
`;

interface ButtonTypes {
  href: string;
  as: string;
  text: string;
}

const Button: FunctionComponent<ButtonTypes> = ({ href, as, text }) => (
  <StyledButton whileHover={{scale: 1.1}}>
    <Link as={as} href={href}>
      <ButtonAnchor>{text}</ButtonAnchor>
    </Link>
  </StyledButton>
);

export { Button };
