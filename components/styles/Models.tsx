import styled from 'styled-components';
import { Props } from '../styles/Themes';

const StyledModelPage = styled.div`
  display: grid;
  grid-template-columns: auto 25%;
`;

const StyledModelListings = styled.div`
  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    grid-template-columns: 50% 50%;
    display: grid;
  }
`;

const StyledModelListing = styled.div`
  margin: 0 25px 50px 25px;
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
`;

const StyledModelListingBlock = styled.div`
  padding: 10px;
  font-size: 1.25em;
`;

const StyledModelListingParagraph = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StyledModelListingColumn = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const StyledReadMore = styled.p`
  background: ${(props: Props) => props.theme.colors.red};
  padding: 5px;
  transform: skew(-20deg);
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;

  a {
    color: ${(props: Props) => props.theme.colors.white};
  }
`;

const StyledModelImage = styled.img`
  border: 20px solid ${(props: Props) => props.theme.colors.white};
  max-width: 100%;
  margin-bottom: 10px;
`;

export { StyledModelListings, StyledModelImage, StyledModelListing, StyledModelListingTitle, StyledModelListingInfo, StyledModelListingParagraph, StyledModelListingBlock, StyledModelListingColumn, StyledReadMore, StyledModelPage }