import Router from 'next/router';
import React from 'react';
import { withLayout } from '../../components/layout/withLayout';
import { Main } from '../../styles/Generics';
import { roles, hasPermission } from '../../utils/functions/Auth';
import Link from 'next/link';
import Card from '../../components/Card';

const title = `Admin`;
const description = `Admin Control Panel`;

export const adminAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const AdminPageIndex = () => {

  return (
    <Main>
      <Card heading="Admin Panel">
        <p>This page serves as landing page for the administrator panel</p>
        <Link href="/admin/articles"><a>Articles</a></Link>
      </Card>
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
  title, description, useSEO: false, path: `/admin`
});