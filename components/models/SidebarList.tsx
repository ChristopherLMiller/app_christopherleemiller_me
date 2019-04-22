import Link from 'next/link';
import Card from '../Card';
import styled from 'styled-components';
import { Props } from '../styles/Themes';
import { SFC } from 'react';
import { Query } from 'react-apollo';

const SidebarCard = styled.div`
  background: ${(props: Props) => props.theme.colors.grey};
  margin-bottom: 30px;
`;

const SidebarTitle = styled.h3`
  color: ${(props: Props) => props.theme.colors.white};
  background: ${(props: Props) => props.theme.colors.red};
  padding: 10px;
  margin: 0;
  font-size: 1.75em;
`;

const SidebarBody = styled.div`
  padding: 20px;
  font-size: 1.5em;
`;

const SidebarListing = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: ${(props: Props) => props.theme.colors.black};
`;
const SidebarListAnchor = styled.a`
  color: ${(props: Props) => props.theme.colors.black};

  :hover {
    color: ${(props: Props) => props.theme.colors.red};
    cursor: pointer;
  }
`;
interface SidebarListTypes {
  title: string,
  query: string,
  property: string,
}
const SidebarList: SFC<SidebarListTypes> = ({ title, query, property }) => (
  <SidebarCard>
    <SidebarTitle>{title}</SidebarTitle>
    <Query query={query}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>
        if (error) {
          console.log(`Fetch Error: ${error}`);
          return (
            <Card>
              <h3>Unable to fetch data</h3>
              <p>{error.message}</p>
            </Card>
          )
        }

        return (
          <SidebarBody>
            <SidebarListing>
              <li key="all">
                <Link href={`/models`} shallow>
                  <SidebarListAnchor>All</SidebarListAnchor>
                </Link>
              </li>
              {data[Object.keys(data)[0]].map(object => (
                <li key={object.id}>
                  <Link href={`/models?${property}=${object.slug}`} shallow>
                    <SidebarListAnchor>{object[property]}</SidebarListAnchor>
                  </Link>
                </li>
              ))}
            </SidebarListing>
          </SidebarBody>
        )
      }}
    </Query>
  </SidebarCard>
);

export { SidebarList };