import { FunctionComponent } from "react";
import { BuildTime } from "components/models/elements/BuildTime";
import { ModelTypes } from "utils/queries/models";
import {
  StyledModelListingBlock,
  StyledModelListingColumn,
  StyledModelListingInfo,
} from "styles/Models";

const ModelInfo: FunctionComponent<ModelTypes> = ({ model }) => {
  const completed = model?.completed ? `Yes` : `No`;

  return (
    <StyledModelListingInfo>
      <StyledModelListingBlock>
        <StyledModelListingColumn>
          <p>Brand: {model?.manufacturer?.company}</p>
          <p>Kit No: {model?.kit_number}</p>
          <p>Scale: {model?.scale?.scale}</p>
          <p>Released: {model?.year_released}</p>
        </StyledModelListingColumn>
        <StyledModelListingColumn>
          <p>Completed: {completed}</p>
          <p>
            Build Time:{` `}
            {model?.clockify_id && <BuildTime id={model?.clockify_id} />}
          </p>
        </StyledModelListingColumn>
      </StyledModelListingBlock>
    </StyledModelListingInfo>
  );
};
export { ModelInfo };
