import styled from "styled-components";

const StyledModelPage = styled.div``;

const StyledModelListings = styled.div`
  transition-delay: 1s;
  transition: all 0.25s;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
`;

const StyledModelListing = styled.div`
  display: block;
  height: fit-content;
`;

const StyledModelListingInfo = styled.div`
  background: var(--background-white);
  color: var(--text-color);
`;

const StyledModelListingBlock = styled.div`
  padding: 15px 0;
  font-size: 1.25rem;
`;

const StyledModelListingColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export {
  StyledModelListings,
  StyledModelListing,
  StyledModelListingInfo,
  StyledModelListingBlock,
  StyledModelListingColumn,
  StyledModelPage,
};
