import styled from 'styled-components';
import posed from 'react-pose';
import { Props } from '../styles/Themes';

const StyledModelPage = styled.div`
  display: block;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    display: grid;
    grid-template-columns: auto 20%;
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    grid-template-columns: auto: 20%;
  }
`;

const StyledModelListings = styled.div`
  transition-delay: 1s;
  transition: all 0.25s;
  order: 1;

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    grid-template-columns: 50% 50%;
    display: grid;
    grid-gap: 40px;
    order: 0;
  }
`;

const ModelListingHover = posed.a({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: `none`,
  },
  hover: {
    scale: 1.05,
    boxShadow: `0 10px 6px -6px #777`,
  },
});

const StyledModelListing = styled(ModelListingHover)`
  margin: 0 0 50px 0;
  cursor: pointer;
  display: block;

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    margin: 0 0 40px 0;
  }
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
