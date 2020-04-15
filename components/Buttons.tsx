import styled from 'styled-components';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import posed from 'react-pose';

const PosedButton = posed.p({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
});

export const StyledButton = styled(PosedButton)`
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
  <StyledButton>
    <Link as={as} href={href}>
      <ButtonAnchor>{text}</ButtonAnchor>
    </Link>
  </StyledButton>
);

export { Button };
