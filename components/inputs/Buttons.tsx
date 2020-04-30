import styled from "styled-components";
import { FunctionComponent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.p)`
  background: var(--main-color);
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 2rem;
  border: none;
`;

const ButtonVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.15,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const ButtonAnchor = styled.a`
  color: var(--text-color-light);
`;

const ButtonVisual = styled.button`
  background: var(--main-color);
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 2rem;
  border: none;
  color: var(--text-color-light);
`;

interface ButtonTypes {
  href: string;
  as: string;
  text: string;
}

const Button: FunctionComponent<ButtonTypes> = ({ href, as, text }) => (
  <StyledButton
    whileHover="hover"
    animate="rest"
    initial="rest"
    variants={ButtonVariants}
  >
    <Link as={as} href={href}>
      <ButtonAnchor>{text}</ButtonAnchor>
    </Link>
  </StyledButton>
);

export { Button, ButtonVisual };
