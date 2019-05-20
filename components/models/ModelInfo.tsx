import Link from 'next/link';
import { SFC } from 'react';
import { BuildTime } from './BuildTime';
import { ModelTypes } from './Types';
import {
  StyledModelListingBlock,
  StyledModelListingColumn,
  StyledModelListingInfo,
  StyledModelListingParagraph,
  StyledModelListingTitle,
} from '../styles/Models';
import { Button } from '../Buttons';

const ModelInfo: SFC<ModelTypes> = ({ model }) => {
  const completed = model.completed ? `Yes` : `No`;

  return (
    <StyledModelListingInfo>
      <StyledModelListingTitle>{model.title}</StyledModelListingTitle>
      <StyledModelListingBlock>
        <StyledModelListingColumn>
          <StyledModelListingParagraph>
            Brand: {model.manufacturer.company}
          </StyledModelListingParagraph>
          <StyledModelListingParagraph>
            Kit No: {model.kit_number}
          </StyledModelListingParagraph>
          <StyledModelListingParagraph>
            Scale: {model.scale.scale}
          </StyledModelListingParagraph>
          <StyledModelListingParagraph>
            Released: {model.year_released}
          </StyledModelListingParagraph>
        </StyledModelListingColumn>
        <StyledModelListingColumn>
          <StyledModelListingParagraph>
            Completed: {completed}
          </StyledModelListingParagraph>
          {model.clockify_id && <BuildTime id={model.clockify_id} />}
        </StyledModelListingColumn>
        <Button
          as={`/model/${model.slug}`}
          href={`/model?slug=${model.slug}`}
          text="View More"
        />
      </StyledModelListingBlock>
    </StyledModelListingInfo>
  );
};
export { ModelInfo };
