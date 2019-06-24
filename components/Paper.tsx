import styled from 'styled-components';
import { SFC } from 'react';

const StyledPaper = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  height: 100%;
  width: 100%;
  transform: skewY(-5deg) translateY(${props => props.translate});
  z-index: -1;
  background: var(--main-color-transparent);
  box-shadow: var(--box-shadow);
  min-height: 150px;
`;

interface PaperTypes {
  translate: String;
}
const Paper: SFC<PaperTypes> = ({ translate = `-100%` }) => (
  <StyledPaper translate={translate} />
);

export { Paper };
