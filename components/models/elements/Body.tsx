import { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import { ModelTypes } from '../Types';
import { Title } from '../../elements/Title';
import { CommentThread } from '../../CommentThread';
import { StyledGallery } from '../gallery';
import { FeaturedImage } from '../../FeaturedImage';
import { Props } from '../../../styles/Themes';
import { ImageURL } from '../../../utils/functions';

const StyledContentArea = styled.div`
  max-width: ${(props: Props) => props.theme.max_width};
  margin: 0 auto;
  order: 1;
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    order: 0;
  }
`;

const ModelContentArea = styled.div`
  margin: 25px 0;
  background: var(--background-light);
  color: var(--text-color);
`;

const ModelContent = styled.div`
  font-family: var(--font-main);
  padding: 20px;
  font-weight: 300;
  color: var(--background-darker);
  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    font-size: var(--font-size-responsive);
  }

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

const Body: SFC<ModelTypes> = ({ model }) => {
  const images = model.images.map(image => {
    return {
      original: `${ImageURL(image.image.public_id, 1920)}`,
      thumbnail: `${ImageURL(image.image.public_id, 200)}`,
    };
  });

  return (
  <StyledContentArea>
    <Title>{model.title}</Title>
    {images.length > 0 && (
      <StyledGallery>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          defaultImage={ImageURL()}
          showBullets
        />
      </StyledGallery>
    )}
    {images.length == 0 && (
      <FeaturedImage
        image={model.featured_image}
        width={1500}
        alt={model.title}
      />
    )}

    <ModelContentArea>
      <Title>Build Log</Title>
      <ModelContent>
        {model.content != null && <ReactMarkdown source={model.content} />}
        {model.content == null && (
          <ReactMarkdown source="### No Build Log Found" />
        )}
      </ModelContent>
    </ModelContentArea>
    <ModelContentArea>
      <Title>Review</Title>
      <ModelContent>
        {model.review != null && <ReactMarkdown source={model.review} />}
        {model.review == null && <ReactMarkdown source="### No Review Found" />}
      </ModelContent>
    </ModelContentArea>
    <CommentThread item={model} slug="model" />
  </StyledContentArea>
);
};
export { Body };
