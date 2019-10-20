import { SFC } from 'react';
import ReactMarkdown from 'react-markdown';
//import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import { ModelTypes } from '../Types';
import { Title } from '../../elements/Title';
import { CommentThread } from '../../CommentThread';
//import { StyledGallery } from '../gallery';
//import { FeaturedImage } from '../../FeaturedImage';
import { Props } from '../../../styles/Themes';
//import { ImageURL } from '../../../utils/functions';
import { StyledContentBlock } from '../../elements/ContentBlock';

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

const Body: SFC<ModelTypes> = ({ model }) => {
  /*const images = model.images.map(image => {
    return {
      original: `${ImageURL(image.image.public_id, 1920)}`,
      thumbnail: `${ImageURL(image.image.public_id, 200)}`,
    };
  });*/

  return (
    <StyledContentArea>
      <Title>{model.title}</Title>


      <ModelContentArea>
        <Title>Build Log</Title>
        <StyledContentBlock>
          {model.content != null && <ReactMarkdown source={model.content} />}
          {model.content == null && (
            <ReactMarkdown source="### No Build Log Found" />
          )}
        </StyledContentBlock>
      </ModelContentArea>
      <ModelContentArea>
        <Title>Review</Title>
        <StyledContentBlock>
          {model.review != null && <ReactMarkdown source={model.review} />}
          {model.review == null && <ReactMarkdown source="### No Review Found" />}
        </StyledContentBlock>
      </ModelContentArea>
      <CommentThread item={model} slug="model" />
    </StyledContentArea>
  );
};
export { Body };
