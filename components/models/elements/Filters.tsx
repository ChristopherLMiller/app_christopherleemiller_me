import styled from "styled-components";
import { useState } from "react";
import { modelsCompletedFilter, modelsSort } from "../../../data/json";
import { Title } from "../../elements/Title";
import { Props } from "../../../styles/Themes";
import { SortSelect } from "./inputs/SortSelect";
import { CompletedSelect } from "./inputs/CompletedSelect";
import { TagSelect } from "./inputs/TagSelect";
import { ScaleSelect } from "./inputs/ScaleSelect";
import { CompanySelect } from "./inputs/CompanySelect";

const Filter = styled.div``;

const FilterContents = styled.div`
  background: var(--background-dark);
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.large}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.extra_large}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.super_large}) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

const FilterItem = styled.div`
  padding: 0 10px;
  display: grid;
  grid-template-columns: auto 60%;
  align-items: center;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    padding: 10px 20px;
    display: block;
  }
`;

const FilterProperty = styled.div`
  text-transform: uppercase;
  text-decoration: none;
  text-align: right;
  padding-right: 5px;
  color: var(--text-color);
  font-size: var(--font-size-responsive);
  overflow: hidden;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    text-align: center;
    padding-right: 0;
    text-decoration: underline;
  }
`;

const ToggleButton = styled.button`
  color: var(--text-color-light);
  background: none;
  border: none;
  font-size: 2rem;
  position: absolute;
  right: 35px;
  outline: 2px solid white;

  @media (min-width: ${(props: Props) => props.theme.sizes.med_small}) {
    display: none;
  }
`;

const ModelsFilters = () => {
  const [isOpen, setOpen] = useState(`open`);

  return (
    <Filter>
      <Title>
        Filters
        <ToggleButton
          onClick={() => setOpen(isOpen === `open` ? `closed` : `open`)}
        >
          {isOpen ? `-` : `+`}
        </ToggleButton>
      </Title>
      <FilterContents>
        <FilterItem>
          <FilterProperty>Sort By</FilterProperty>
          <SortSelect items={modelsSort} />
        </FilterItem>
        <FilterItem>
          <FilterProperty>Completed</FilterProperty>
          <CompletedSelect items={modelsCompletedFilter} />
        </FilterItem>
        <FilterItem>
          <FilterProperty>Brand</FilterProperty>
          <CompanySelect field="company" />
        </FilterItem>
        <FilterItem>
          <FilterProperty>Scale</FilterProperty>
          <ScaleSelect field="scale" />
        </FilterItem>
        <FilterItem>
          <FilterProperty>Tags</FilterProperty>
          <TagSelect field="title" />
        </FilterItem>
      </FilterContents>
    </Filter>
  );
};
export { ModelsFilters };
