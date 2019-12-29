import styled from 'styled-components';
import { SFC } from 'react';

type PaperProps = {
  translateAxis: string;
};

const StyledPaper = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
  height: 100%;
  width: 100%;
  transform: skewY(-5deg) translateY(${(props: PaperProps) => props.translateAxis});
  z-index: -1;
  background: var(--main-color-transparent);
  box-shadow: var(--box-shadow);
  min-height: 250px;
`;

interface PaperTypes {
  translate: string;
}
const Paper: SFC<PaperTypes> = ({ translate = `- 100 % ` }) => (
  <StyledPaper translateAxis={translate} />
);

export { Paper };
