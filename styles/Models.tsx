import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../styles/Themes';

const StyledModelPage = styled.div``;

const StyledModelListings = styled.div`
  transition-delay: 1s;
  transition: all 0.25s;
  display: grid;
  grid-gap: 25px;

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.extra_large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ModelListingHover = posed.a({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: 0,
  },
  hover: {
    scale: 1.05,
    boxShadow: `0 15px 15px 0px #2a2a2a`,
  },
});

const StyledModelListing = styled(ModelListingHover)`
  cursor: pointer;
  display: block;
`;

const StyledModelListingInfo = styled.div`
  background: var(--background-light);
  color: var(--text-color);
`;

const StyledModelListingTitle = styled.h2`
  background: var(--main-color);
  color: var(--text-color-light);
  margin: 0;
  padding: 20px;
  font-family: var(--font-family);
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
`;

const StyledModelListingBlock = styled.div`
  padding: 15px 20px;
  font-size: 1.25em;
`;

const StyledModelListingParagraph = styled.p`
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-family: var(--font-family);
  color: var(--text-color);
  font-size: 1em;

  a {
    color: var(--main-color);
  }
  a:hover {
    text-decoration: underline;
  }
`;

const StyledModelListingColumn = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
`;

export {
  StyledModelListings,
  StyledModelListing,
  StyledModelListingTitle,
  StyledModelListingInfo,
  StyledModelListingParagraph,
  StyledModelListingBlock,
  StyledModelListingColumn,
  StyledModelPage,
};
