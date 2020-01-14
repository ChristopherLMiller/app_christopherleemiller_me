import Router from 'next/router';
import React from 'react';
import { withLayout } from '../../components/layout/withLayout';
import { Main } from '../../styles/Generics';
import { roles, hasPermission } from '../../utils/functions/Auth';
import Link from 'next/link';
import Card from '../../components/Card';
import styled from 'styled-components';
import { useQuery } from 'react-apollo';
import { Loader } from '../../components/elements/Loader';
import { iData } from '../../components/articles/Types';
import { ARTICLES_QUERY } from '../../utils/query';
import { ButtonLink } from '../../components/inputs/Buttons';

const title = `Admin`;
const description = `Admin Control Panel`;

export const adminAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

interface iGrid {
  columns: number;
}

const Grid = styled.div<iGrid>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 20px;
`;

const Listing = styled.ol`
  list-style-type: decimal;
  list-style-position: inside
  padding-left: 0;
`;

const ListingItem = styled.li`
  text-align: left;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

const AdminPageIndex = () => {
  const {data, loading, error} = useQuery<iData>(ARTICLES_QUERY, {
    variables: {
      start: 0,
      limit: 10,
      sort: "created_at:DESC"
    },
  });

  console.log(error);

  return (
    <Main>
      <Grid columns={3}>
        <Card heading="Articles">
          <Loader isLoading={loading} />
          <span>10 Most Recent Articles</span>
          <Listing>
          {data?.articles.map(article => (
            <ListingItem>
              <Link href={`/post/${article.slug}`}>
                <a>{article.title}</a>
              </Link>
              <Link href={`/admin/article/edit/${article.id}`}>
                <ButtonLink>Edit</ButtonLink>
              </Link>
            </ListingItem>
          ))}
          </Listing>
          <Link href="/admin/articles"><a>All Articles</a></Link><Link href="/admin/articles/new"><a>New Article</a></Link>
        </Card>
        <Card heading="Models">
          <p>This page serves as landing page for the administrator panel</p>
          <Link href="/admin/articles"><a>Articles</a></Link>
        </Card>
        <Card heading="Projects">
          <p>This page serves as landing page for the administrator panel</p>
          <Link href="/admin/articles"><a>Articles</a></Link>
        </Card>
        <Card heading="Services">
          <p>This page serves as landing page for the administrator panel</p>
          <Link href="/admin/articles"><a>Articles</a></Link>
        </Card>
        <Card heading="Users">
          <p>This page serves as landing page for the administrator panel</p>
          <Link href="/admin/articles"><a>Articles</a></Link>
        </Card>
      </Grid>

    </Main>
  );

}

AdminPageIndex.getInitialProps = async (ctx: any) => {
  if (hasPermission({ groups: [roles.admin] }, { useCookie: true })) {
    return true;
  }

  if (ctx.res) {
    ctx.res.writeHead(302, {
      location: '/',
    });
    ctx.res.end();
  } else {
    Router.push('/');
  }

  return true;
}

export default withLayout(AdminPageIndex, {
  title, description, useSEO: true, path: `/admin`
});