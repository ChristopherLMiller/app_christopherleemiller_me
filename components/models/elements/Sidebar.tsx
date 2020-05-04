import { FunctionComponent } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Sidebar } from "../../Sidebar";
import { ModelTypes } from "../Types";
import { BuildTime } from "./BuildTime";

const StyledModelSidebar = styled.div``;

const Splitter = styled.div`
  color: var(--background-dark);
  padding: 0 5px;
  display: inline-block;
`;

const ModelSidebar: FunctionComponent<ModelTypes> = ({ model }) => (
  <StyledModelSidebar>
    <Sidebar title="Information">
      <ul>
        <li>Brand: {model?.manufacturer?.company}</li>
        <li>Kit Number: {model?.kit_number}</li>
        <li>Scale: {model?.scale?.scale}</li>
        <li>Released: {model?.year_released}</li>
        <li>Completed: {model?.completed ? `Yes` : `No`}</li>
        <li>
          Scalemates: <a href={model?.scalemates_link}>Link</a>
        </li>
        {model?.clockify_id && (
          <li>
            Build Time:{` `}
            {<BuildTime id={model?.clockify_id} />}
          </li>
        )}
        {model?.youtube_link && (
          <li>
            YouTube Video: <a href={model?.youtube_link}>Link</a>
          </li>
        )}
      </ul>
    </Sidebar>
    <Sidebar title="Tags">
      {model.tags.map((tag, index) => (
        <span key={tag.id}>
          {!!index && <Splitter>|</Splitter>}
          <Link href={`/models?tag=${tag.slug}`}>
            <a>{tag.title}</a>
          </Link>
        </span>
      ))}
    </Sidebar>
  </StyledModelSidebar>
);

export { ModelSidebar };
