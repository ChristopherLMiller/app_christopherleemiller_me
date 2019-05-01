import { SFC, Fragment } from 'react';
import styled from 'styled-components';
import { ModelTypes } from './Types';
import { BuildTime } from './BuildTime';
import { Props } from '../styles/Themes';
import { ModelImage } from './ModelImage';
import {
  StyledModelListingParagraph,
  StyledModelListingTitle,
} from '../styles/Models';

const StyledModelPage = styled.div`
  display: grid;
  grid-template-columns: auto 25%;
`;

const StyledContentArea = styled.div``;
const StyledSidebar = styled.div`
  padding-left: 25px;
`;
const StyledSidebarContent = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  padding: 10px 20px;
  font-size: 1.5em;
`;

const SidebarSection = styled.div`
  margin-bottom: 50px;
`;

const SidebarList = styled.ul``;

const SidebarListItem = styled.li``;

const Model: SFC<ModelTypes> = ({ model }) => (
  <Fragment>
    <StyledModelPage>
      <StyledContentArea>
        <ModelImage model={model} width={1500} />
      </StyledContentArea>
      <StyledSidebar>
        <SidebarSection>
          <StyledModelListingTitle>{model.title}</StyledModelListingTitle>
          <StyledSidebarContent>
            <StyledModelListingParagraph>
              Brand: {model.manufacturer.company}
            </StyledModelListingParagraph>
            <StyledModelListingParagraph>
              Kit Number: {model.kit_number}
            </StyledModelListingParagraph>
            <StyledModelListingParagraph>
              Scale: {model.scale.scale}
            </StyledModelListingParagraph>
            <StyledModelListingParagraph>
              Released: {model.year_released}
            </StyledModelListingParagraph>
            {model.clockify_id && <BuildTime id={model.clockify_id} />}
          </StyledSidebarContent>
        </SidebarSection>
        <SidebarSection>
          <StyledModelListingTitle>Tags</StyledModelListingTitle>
          <StyledSidebarContent>
            <SidebarList>
              {model.tags.map(tag => (
                <SidebarListItem key={tag.id}>Yarrr</SidebarListItem>
              ))}
            </SidebarList>
          </StyledSidebarContent>
        </SidebarSection>
      </StyledSidebar>
    </StyledModelPage>
  </Fragment>
);

export { Model };
