import { FunctionComponent } from "react";
import styled from "styled-components";
import { ModelTypes } from "utils/queries/models";
import { StyledModelListing } from "styles/Models";
import { ListingTitle } from "components/models/elements/ListingTitle";
import { Polaroid } from "components/Polaroid";
import { BuildTime } from "components/models/elements/BuildTime";

const InfoPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-gap: 0 15px;

  & span:first-child,
  & span:last-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
const ModelListing: FunctionComponent<ModelTypes> = ({ model }) => (
  <StyledModelListing>
    <ListingTitle
      as={`/models/model/${model.slug}`}
      href={`/models/model?slug=${model.slug}`}
    >
      {model.title} {model.status === "DRAFT" && `*${model.status}*`}
    </ListingTitle>
    <Polaroid
      image={model.featured_image}
      link={{ as: `/models/model/${model.slug}`, href: `/models/model/[slug]` }}
    >
      <InfoPanel>
        <span>Brand: {model?.manufacturer?.company}</span>
        <span>Kit #: {model?.kit_number}</span>
        <span>Scale: {model?.scale?.scale}</span>
        <span>Released: {model?.year_released}</span>
        <span>Completed: {model?.completed ? `Yes` : `No`}</span>
        <BuildTime id={model?.clockify_id} />
      </InfoPanel>
    </Polaroid>
  </StyledModelListing>
);

export { ModelListing };
