import { SFC } from 'react';
import { BuildTime } from './BuildTime';
import { ModelTypes } from './Types';
import {
  StyledModelListingBlock,
  StyledModelListingColumn,
  StyledModelListingInfo,
  StyledModelListingParagraph,
} from '../../styles/Models';

const ModelInfo: SFC<ModelTypes> = ({ model }) => {
  const completed = model.completed ? `Yes` : `No`;

  return (
    <StyledModelListingInfo>
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
          <StyledModelListingParagraph>
            Build Time:{` `}
            {model.clockify_id && <BuildTime id={model.clockify_id} />}
          </StyledModelListingParagraph>
        </StyledModelListingColumn>
      </StyledModelListingBlock>
    </StyledModelListingInfo>
  );
};
export { ModelInfo };
