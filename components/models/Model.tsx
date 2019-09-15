import { SFC, Fragment } from 'react';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { ModelTypes } from './Types';
import { Props } from '../../styles/Themes';
import { SITE_DEFAULT_IMAGE_FILE, SEPARATOR } from '../../config';
import { ImageURL } from '../../utils/functions';

import { Body } from './elements/Body';
import { ModelSidebar } from './elements/Sidebar';

const StyledModelPage = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    display: grid;
    grid-template-columns: auto 25%;
  }
`;

const Model: SFC<ModelTypes> = ({ model }) => {
  const image = model.featured_image
    ? model.featured_image.public_id
    : SITE_DEFAULT_IMAGE_FILE;

  const tags = model.tags.map(tag => tag.slug);

  return (
    <Fragment>
      <NextSeo
        title={`Model${SEPARATOR}${model.seo_title}`}
        canonical={`${process.env.SITE_URL}/model/${model.slug}`}
        openGraph={{
          title: `Model${SEPARATOR}${model.seo_title}`,
          description: model.seo_description,
          url: `${process.env.SITE_URL}/model/${model.slug}`,
          type: `article`,
          article: {
            modifiedTime: model.updated_at,
            publishedTime: model.created_at,
            tags: tags.length > 0 ? tags : undefined,
          },
          images: [
            {
              alt: model.title,
              url: `${ImageURL(image)}.jpg`,
            },
          ],
        }}
      />
      <StyledModelPage>
        <Body model={model} />
        <ModelSidebar model={model} />
      </StyledModelPage>
    </Fragment>
  );
};
export { Model };
