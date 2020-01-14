import styled from 'styled-components';
import { SFC } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { theme } from '../../styles/Themes';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
`;

interface iLoader {
  isLoading: boolean;
}

const Loader:SFC<iLoader> = ({isLoading}) => (
  <StyledLoader>
    <SyncLoader size={20} margin={10} loading={isLoading} color={theme.colors.red}/>
  </StyledLoader>
)

export { Loader }