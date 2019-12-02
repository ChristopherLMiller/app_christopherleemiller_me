import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
import { canAccessPage } from '../utils/functions/Auth';
import { useRouter } from 'next/router';

const title = `Galleries`;
const description = `A visual of all the things me!`;

export const galleriesAuth = {
  isSecure: true
};

const GalleriesPage = () => {
  if (canAccessPage(galleriesAuth)) {
    return (
      <Main>
        <Card>
          <p>This will be a highly dynamic page containing all my galleries</p>
        </Card>
      </Main>
    );
  } else {
    if (process.browser) {
      const router = useRouter();
      router.push('/unauthorized');
    }
    return null
  }
}
export default withLayout(
  GalleriesPage,
  {
    title,
    description,
    useSEO: true,
    path: `/galleries`
  });
