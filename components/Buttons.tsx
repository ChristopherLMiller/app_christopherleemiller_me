import styled from 'styled-components';
import { SFC } from 'react';
import Link from 'next/link';
import posed from 'react-pose';
import { NoEmitOnErrorsPlugin } from 'webpack';
import { Props } from '../components/styles/Themes';

const PosedButton = posed.p({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
});

const StyledButton = styled(PosedButton)`
  background: ${(props: Props) => props.theme.colors.red};
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
  color: ${(props: Props) => props.theme.colors.white};
`;

interface ButtonTypes {
  href: string;
  as: string;
  text: string;
}

const Button: SFC<ButtonTypes> = ({ href, as, text }) => (
  <StyledButton>
    <Link as={as} href={href}>
      <ButtonAnchor>{text}</ButtonAnchor>
    </Link>
  </StyledButton>
);

export { Button };
