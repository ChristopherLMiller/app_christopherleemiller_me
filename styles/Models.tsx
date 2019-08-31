import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../styles/Themes';

const StyledModelPage = styled.div``;

const ModelListingsEnter = posed.div({
  visible: {
    delayChildren: 200,
    staggerChildren: 100,
  },
  invisible: {},
});

const StyledModelListings = styled(ModelListingsEnter)`
  transition-delay: 1s;
  transition: all 0.25s;
  display: grid;
  grid-gap: 50px;

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.super_large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ModelListingHover = posed.div({
  visible: {
    opacity: 1,
  },
  invisible: {
    opacity: 0,
  },
});

const StyledModelListing = styled(ModelListingHover)`
  display: block;
  height: fit-content;
`;

const StyledModelListingInfo = styled.div`
  background: var(--background-white);
  color: var(--text-color);
`;

const StyledModelListingBlock = styled.div`
  padding: 15px 0;
  font-size: 1.25em;
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
