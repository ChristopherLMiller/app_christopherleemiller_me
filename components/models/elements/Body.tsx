import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import { Title } from "../../elements/Title";
import { CommentThread } from "../../CommentThread";
import { StyledGallery } from "../gallery";
import { Props } from "../../../styles/Themes";
import { ImageURL } from "../../../utils/functions/imageURL";
import { StyledContentBlock } from "../../elements/ContentBlock";
import { Image } from "../../elements";
import { ModelTypes } from "../../../utils/queries/models";

const StyledContentArea = styled.div`
  max-width: ${(props: Props) => props.theme.max_width};
  margin: 0 auto;
  order: 1;
  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    order: 0;
  }

  img {
    width: 100%;
  }
`;

const ModelContentArea = styled.div`
  margin: 25px 0;
  background: var(--background-light);
  color: var(--text-color);
`;

const Body: FunctionComponent<ModelTypes> = ({ model }) => {
  const images = model?.images?.map((image) => {
    return {
      original: `${ImageURL(image?.image?.provider_metadata?.public_id)}.jpg`,
      thumbnail: `${ImageURL(image?.image?.provider_metadata?.public_id)}.jpg`,
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
            showBullets
          />
        </StyledGallery>
      )}
      {images.length == 0 && (
        <Image
          file={model?.featured_image?.provider_metadata?.public_id}
          options={{ width: 1500 }}
          alt={model.title}
        />
      )}

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
          {model.review == null && (
            <ReactMarkdown source="### No Review Found" />
          )}
        </StyledContentBlock>
      </ModelContentArea>
      <CommentThread item={model} slug="model" />
    </StyledContentArea>
  );
};
export { Body };
