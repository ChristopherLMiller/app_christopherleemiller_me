import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../styles/Themes';

const StyledModelPage = styled.div``;

const StyledModelListings = styled.div`
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
  @media (min-width: ${(props: Props) => props.theme.sizes.extra_large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ModelListingHover = posed.a({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
});

const StyledModelListing = styled(ModelListingHover)`
  cursor: pointer;
  display: block;
  height: fit-content;
`;

const StyledModelListingInfo = styled.div`
  background: var(--background-light);
  color: var(--text-color);
`;

const StyledModelListingTitle = styled.h2`
  margin: 0;
  padding: 20px;
  background: var(--main-color);
  color: var(--text-color-light);
  font-family: 'Permanent Marker';
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  transform: rotate(-4deg) translateY(45px) scale(1.1);
`;

const StyledModelListingBlock = styled.div`
  padding: 15px 20px;
  font-size: 1.25em;
`;

const StyledModelListingParagraph = styled.p`
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-family: 'Permanent Marker';
  padding: 0;
  font-style: italic;
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
  grid-template-columns: 1fr 1fr;
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
