import styled from 'styled-components';
import {
  ALL_MANUFACTURERS_QUERY,
  ALL_SCALES_QUERY,
  ALL_MODELS_TAGS_QUERY,
} from '../../../utils/query';
import { Select } from '../../inputs/Select';
import { modelsCompletedFilter, modelsSort } from '../../../utils/json';
import { Title } from '../../elements/Title';
import { Props } from '../../../styles/Themes';

const Filter = styled.div``;

const FilterContents = styled.div`
  background: var(--background-dark);
  display: flex;
  flex-direction: column;

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
  padding: 10px 20px;
`;

const FilterProperty = styled.div`
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  color: var(--text-color);
  font-size: var(--font-size-responsive);
`;

const ModelsFilters = () => (
  <Filter>
    <Title>Filters</Title>
    <FilterContents>
      <FilterItem>
        <FilterProperty>Sort By</FilterProperty>
        <Select items={modelsSort} slug="sort" />
      </FilterItem>
      <FilterItem>
        <FilterProperty>Completed</FilterProperty>
        <Select items={modelsCompletedFilter} slug="completed" />
      </FilterItem>
      <FilterItem>
        <FilterProperty>Brand</FilterProperty>
        <Select
          graphqlQuery={ALL_MANUFACTURERS_QUERY}
          slug="company"
          field="company"
        />
      </FilterItem>
      <FilterItem>
        <FilterProperty>Scale</FilterProperty>
        <Select graphqlQuery={ALL_SCALES_QUERY} slug="scale" field="scale" />
      </FilterItem>
      <FilterItem>
        <FilterProperty>Tags</FilterProperty>
        <Select graphqlQuery={ALL_MODELS_TAGS_QUERY} slug="tag" field="title" />
      </FilterItem>
    </FilterContents>
  </Filter>
);

export { ModelsFilters };
