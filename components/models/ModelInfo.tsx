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
  StyledReadMore,
} from '../styles/Models';

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
        <StyledReadMore>
          <Link as={`/model/${model.slug}`} href={`/model?slug=${model.slug}`}>
            <a>View More </a>
          </Link>
        </StyledReadMore>
      </StyledModelListingBlock>
    </StyledModelListingInfo>
  );
};
export { ModelInfo };
