import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  background: var(--main-color);
  color: var(--text-color-light);
  margin: 25px 0;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--background-darker);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
