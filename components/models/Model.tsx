import { SFC, Fragment } from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import NextSeo from 'next-seo';
import ImageGallery from 'react-image-gallery';
import { ModelTypes } from './Types';
import { BuildTime } from './BuildTime';
import { Props } from '../../styles/Themes';
import { StyledModelListingParagraph } from '../../styles/Models';
import { SEPARATOR, SITE_TITLE } from '../../config';
import { ImageURL } from '../../utils/functions';
import { Title } from './elements/Title';
import { CommentThread } from '../CommentThread';
import { StyledGallery } from './gallery';
import { FeaturedImage } from '../FeaturedImage';

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
  background: var(--background-light);
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
  color: var(--text-color);
  list-style-position: inside;
  padding-left: 0;
`;

const SidebarListItem = styled.li``;

const ModelContentArea = styled.div`
  margin: 25px 0;
  background: var(--background-light);
  color: var(--text-color);
`;

const ModelContent = styled.div`
  font-family: var(--font-family);
  font-size: 1.25em;
  padding: 20px;

  img {
    width: 100%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med}) {
    img {
      width: calc(50% - 5px);
    }
  }
  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    img {
      width: calc(33% - 5px);
    }
  }
`;

const Model: SFC<ModelTypes> = ({ model }) => {
  const images = model.images.map(image => {
    return {
      original: `${ImageURL(image.image.public_id, 1920)}`,
      thumbnail: `${ImageURL(image.image.public_id, 200)}`,
    };
  });

  console.log(model.content);

  return (
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
                url: `${ImageURL(model.featured_image)}.jpg`,
              },
            ],
          },
        }}
      />
      <StyledModelPage>
        <StyledContentArea>
          { (images.length > 0) &&
          <StyledGallery>
            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} defaultImage={ImageURL()} showBullets/>
          </StyledGallery>
          }
          { (images.length == 0) && (
            <FeaturedImage image={model.featured_image} width={1500} alt={model.title} />
          )}

          <ModelContentArea>
            <Title>Build Log</Title>
            <ModelContent>
              {model.content != null && <Markdown>{model.content}</Markdown> }
              {model.content == null && <Markdown>### No Build Log Found</Markdown>}
            </ModelContent>
          </ModelContentArea>
          <ModelContentArea>
            <Title>Review</Title>
            <ModelContent>
              {model.review != null && <Markdown>{model.review}</Markdown> }
              {model.review == null && <Markdown>### No Review Found</Markdown>}
            </ModelContent>
          </ModelContentArea>
          <CommentThread item={model} slug="model" />
        </StyledContentArea>
        <StyledSidebar>
          <SidebarSection>
            <Title>{model.title}</Title>
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
              <Title>Tags</Title>
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
};
export { Model };
