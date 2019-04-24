import { SFC } from 'react';
import styled from 'styled-components';
import { Props } from './styles/Themes';
import Link from 'next/link';
import { Query } from 'react-apollo';

const StyledSidebarList = styled.div`
  border-bottom: 2px solid ${(props: Props) => props.theme.colors.grey_darker};
`;

const SidebarListHeading = styled.h5`
  margin: 0;
  color: ${(props: Props) => props.theme.colors.grey_darkest};
  text-align: center;
  font-size: 1.5em;
  font-family: 'Special Elite';
  text-transform: uppercase;
  text-decoration: underline;
  padding: 20px 0 0 0;
`;

const SidebarListings = styled.ul`
  list-style-type: none;
  padding: 0 30px;
`;

const SidebarItem = styled.li`
  color: ${(props: Props) => props.theme.colors.black};
  font-size: 1.25em;
  font-family: 'Special Elite';
`;

const SidebarItemAnchor = styled.a`
  color: ${(props: Props) => props.theme.colors.red};
  cursor: pointer;
`;

interface SidebarListTypes {
  title: string,
  items?: Array<object>,
  query?: string,
  property?: string,
  slug?: string,
}

const SidebarList: SFC<SidebarListTypes> = ({ title, items, query, property = "title", slug }) => {
  // selectively render for items array
  if (items) {
    return (
      <StyledSidebarList>
        <SidebarListHeading>{title}</SidebarListHeading>
        <SidebarListings>
          <SidebarItem key="all">
            <Link href={`/models`}>
              <SidebarItemAnchor>All</SidebarItemAnchor>
            </Link>
          </SidebarItem>
          {items.map(item => (
            <SidebarItem key={item.id}>
              <Link href={`/models?completed=${item.slug}`} >
                <SidebarItemAnchor>{item.title}</SidebarItemAnchor>
              </Link>
            </SidebarItem>
          ))}
        </SidebarListings>
      </StyledSidebarList>
    )
  }

  // if a query was provided instead of an array of items
  if (query) {
    return (
      <StyledSidebarList>
        <SidebarListHeading>{title}</SidebarListHeading>
        <Query query={query}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log(`Fetch Error: ${error}`);
              return (
                <>
                  <h3>Unable to fetch data</h3>
                  <p>{error.message}</p>
                </>
              );
            }

            return (
              <SidebarListings>
                <SidebarItem key="all">
                  <Link href={`/models`}>
                    <SidebarItemAnchor>All</SidebarItemAnchor>
                  </Link>
                </SidebarItem>
                {data[Object.keys(data)[0]].map(object => (
                  <SidebarItem key={object.id}>
                    <Link href={`/models?${slug}=${object.slug}`}>
                      <SidebarItemAnchor>{object[property]}</SidebarItemAnchor>
                    </Link>
                  </SidebarItem>
                ))}
              </SidebarListings>
            );
          }}
        </Query>
      </StyledSidebarList>
    )
  }

  return null;
}
export { SidebarList };