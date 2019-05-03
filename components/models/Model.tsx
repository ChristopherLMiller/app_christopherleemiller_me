import { SFC, Fragment } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import NextSeo from 'next-seo';
import { CommentsList } from '../CommentsList';
import { ModelTypes } from './Types';
import { BuildTime } from './BuildTime';
import { Props } from '../styles/Themes';
import { ModelImage } from './ModelImage';
import {
  StyledModelListingParagraph,
  StyledModelListingTitle,
} from '../styles/Models';
import { SEPARATOR, SITE_TITLE } from '../../config';
import { ImageURL } from '../../utils/functions';

const StyledModelPage = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    display: grid;
    grid-template-columns: auto 25%;
  }
`;

const StyledContentArea = styled.div`
  max-width: ${(props: Props) => props.theme.max_width};
  margin: 0 auto;
  order: 1;
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    order: 0;
  }
`;
const StyledSidebar = styled.div`
  order: 0;
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    padding-left: 25px;
  }
`;
const StyledSidebarContent = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  padding: 10px 20px;
  font-size: 1.5em;
`;

const SidebarSection = styled.div`
  margin-bottom: 25px;
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    margin-bottom: 50px;
  }
`;

const SidebarList = styled.ul`
  list-style-type: square;
  margin: 0;
  color: ${(props: Props) => props.theme.colors.black};
  list-style-position: inside;
  padding-left: 0;
`;

const SidebarListItem = styled.li``;

const ModelContentArea = styled.div`
  margin: 25px 0;
  background: ${(props: Props) => props.theme.colors.grey};
  color: ${(props: Props) => props.theme.colors.black};
`;

const ModelContent = styled.div`
  font-family: 'Special Elite';
  font-size: 1.25em;
  padding: 20px;
`;

const Model: SFC<ModelTypes> = ({ model }) => (
  <Fragment>
    <NextSeo
      config={{
        title: `${SITE_TITLE}${SEPARATOR}Model${SEPARATOR}${model.title}`,
        description: model.seo_description,
        openGraph: {
          title: `${SITE_TITLE}${SEPARATOR}Model${SEPARATOR}${model.seo_title}`,
          description: model.seo_description,
          url: `${process.env.SITE_URL}/model/${model.slug}`,
          type: `article`,
          article: {
            modifiedTime: model.updated_at,
            publishedTime: model.created_at,
          },
          images: [
            {
              alt: model.title,
              url: ImageURL(model.featured_image),
            },
          ],
        },
      }}
    />
    <StyledModelPage>
      <StyledContentArea>
        <ModelImage model={model} width={1500} />
        <ModelContentArea>
          <StyledModelListingTitle>Build Log & Review</StyledModelListingTitle>
          <ModelContent>
            <Markdown>{model.content}</Markdown>
          </ModelContent>
        </ModelContentArea>
        <CommentsList comments={model.comments} />
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
            <StyledModelListingParagraph>
              Completed: {model.completed ? `Yes` : `No`}
            </StyledModelListingParagraph>
            <StyledModelListingParagraph>
              Scalemates: <a href={model.scalemates_link}>Link</a>
            </StyledModelListingParagraph>
            {model.clockify_id && <BuildTime id={model.clockify_id} />}
          </StyledSidebarContent>
        </SidebarSection>
        {model.tags.length > 0 && (
          <SidebarSection>
            <StyledModelListingTitle>Tags</StyledModelListingTitle>
            <StyledSidebarContent>
              <SidebarList>
                {model.tags.map(tag => (
                  <SidebarListItem key={tag.id}>{tag.title}</SidebarListItem>
                ))}
              </SidebarList>
            </StyledSidebarContent>
          </SidebarSection>
        )}
      </StyledSidebar>
    </StyledModelPage>
  </Fragment>
);

export { Model };
