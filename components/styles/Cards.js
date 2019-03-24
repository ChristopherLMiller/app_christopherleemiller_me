import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${props => props.theme.grey};
  color: black;
  font-family: 'Special Elite', sans-serif;
  max-width: 1000px;
  margin: 25px auto;
`;

const StyledCardBody = styled.div`
  padding: 40px;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;
`;

export { StyledCard, StyledCardBody };
