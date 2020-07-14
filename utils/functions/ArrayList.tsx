import styled from "styled-components";
import { FunctionComponent } from "react";
import Link from "next/link";

const Items = styled.div``;

const ItemSpan = styled.span`
  text-transform: Capitalize;
`;

const Splitter = styled.div`
  color: var(--main-color);
  padding: 0 5px;
  display: inline-block;
`;

interface iArrayList {
  array: Array<any>;
  separator?: string;
  asLinks?: boolean;
}

const ArrayList: FunctionComponent<iArrayList> = ({
  array,
  separator = "|",
  asLinks = false,
}) => (
  <Items>
    {array.map((item, index) => (
      <ItemSpan key={item?.id}>
        {!!index && <Splitter>{separator}</Splitter>}
        {asLinks && (
          <Link href={item.slug}>
            <a>{item.name}</a>
          </Link>
        )}
        {!asLinks && item?.name}
      </ItemSpan>
    ))}
    {array.length == 0 && <ItemSpan>None</ItemSpan>}
  </Items>
);

export { ArrayList };
