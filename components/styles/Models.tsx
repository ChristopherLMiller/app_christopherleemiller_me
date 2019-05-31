import styled from 'styled-components';
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
    order: 0;
  }
`;

const ModelListingPose = {
  enter: {
    opacity: `1`,
  },
  exit: {
    opacity: `0`,
  },
};

const StyledModelListing = styled.div`
  margin: 0 0 50px 0;

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    margin: 0 25px 50px 25px;
  }
`;

const StyledModelListingInfo = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  color: ${(props: Props) => props.theme.colors.black};
`;

const StyledModelListingTitle = styled.h2`
  background: ${(props: Props) => props.theme.colors.red};
  color: ${(props: Props) => props.theme.colors.white};
  margin: 0;
  padding: 20px;
  font-family: Roboto, sans-serif;
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
  font-family: Roboto;
  color: ${(props: Props) => props.theme.colors.black};
  font-size: 1em;

  a {
    color: ${(props: Props) => props.theme.colors.red};
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
  ModelListingPose,
};
