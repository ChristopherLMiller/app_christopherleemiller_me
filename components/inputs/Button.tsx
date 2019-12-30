import posed from 'react-pose';
import styled from 'styled-components';

const PosedButton = posed.button({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
});

export const Button = styled(PosedButton) <{ disabled: boolean }>`
  background: ${props => props.disabled ? 'var(--background-dark)' : 'var(--main-color)'};
  padding: 10px 30px;
  transition: all 0.25s;
  text-align: center;
  margin: 20px 5px;
  max-width: 200px;
  letter-spacing: -1px;
  cursor: ${props => props.disabled ? 'progress' : 'pointer'};
  color: var(--text-color-light);
  font-size: 2rem;
  border: none;
`;