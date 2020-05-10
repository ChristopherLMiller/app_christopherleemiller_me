import { useContext, FC } from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";
import { ModelsFilterContext } from "lib/context/ModelFiltersContext";

import { SCALES_QUERY } from "utils/queries";

const StyledSelect = styled.select`
  font-family: var(--font-main);
  padding: 5px;
  font-size: 1.75rem;
  width: 100%;
  outline: var(--main-color-transparent);
  border: 1px solid var(--main-color-transparent);
  margin: 15px 0;
`;

interface Data {
  [key: string]: Array<Item>;
}
type Item = {
  id: string;
  slug: string;
  title: string;
  [key: string]: string;
};

interface iTagSelect {
  field: string;
}

const ScaleSelect: FC<iTagSelect> = ({ field }) => {
  const { scale, setScaleContext } = useContext(ModelsFilterContext);

  const { loading, data, error } = useQuery<Data>(SCALES_QUERY);

  if (loading) {
    return (
      <StyledSelect>
        <option>------------</option>
      </StyledSelect>
    );
  }

  if (error) {
    console.log(`Fetch Error: ${error.message}`);
    return (
      <StyledSelect>
        <option>------------</option>
      </StyledSelect>
    );
  }

  return (
    <StyledSelect
      onChange={(event) => setScaleContext(event.target.value)}
      value={scale}
    >
      <option key="all">All</option>
      {data !== undefined &&
        data[Object.keys(data)[0]].map((item: Item) => (
          <option key={item.id} value={item.slug}>
            {item[field]}
          </option>
        ))}
    </StyledSelect>
  );
};

export { ScaleSelect };
