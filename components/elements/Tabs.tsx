import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const TabsComponent = styled.div`
  background: var(--color-white);
`;

const TabsHeader = styled.div`
  background: var(--main-color);
`;

const TabsContents = styled.div``;

const Tabs: FunctionComponent = ({ children }) => {
  // @ts-ignore
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsComponent>
      <TabsHeader>
        {
          // @ts-ignore
          children?.map((child: any) => child.props.title)
        }
      </TabsHeader>
      <TabsContents>
        {
          // @ts-ignore
          children?.map((child: any) => child.children)
        }
      </TabsContents>
    </TabsComponent>
  );
};

interface iTab {
  title: string;
}
const Tab: FunctionComponent<iTab> = ({ title }) => <p>{title}</p>;

export { Tabs, Tab };
