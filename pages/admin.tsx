import Router from 'next/router';
import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';

const title = `Admin`;
const description = `Admin Control Panel`;

export const adminAuth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const AdminPage = () => {

  return (
    <Main>
      <Card heading="Admin Panel">
        <p>This page serves as landing page for the administrator panel</p>
      </Card>
    </Main>
  );

}

AdminPage.getInitialProps = async (ctx: any) => {
  console.log('checking auth in admin page');
  console.log(ctx);

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

export default withLayout(AdminPage, {
  title, description, useSEO: true, path: `/admin`
});