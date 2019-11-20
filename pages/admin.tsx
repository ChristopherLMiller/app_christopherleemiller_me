import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
import { canAccessPage } from '../utils/functions/AuthChecker';
import { useRouter } from 'next/router';

const title = `Admin`;
const description = `Admin Control Panel`;

export const auth = {
  isSecure: true,
  permitted: {
    groups: ['Administrator']
  }
};

const AdminPage = () => {
  if (canAccessPage(auth)) {

    return (
      <Main>
        <Card heading="Welcome">
          <p>
            Please excuse the mess while I'm remodeling. Many great things are in
            progress and will appear here as they are built.
      </p>
          <p>
            If you want to enjoy what I have to offer so far though go ahead and
            have a look around as I've got many pieces in place, nothing compared to
            what I have to go yet though.
      </p>
          <p>
            If you find any errors or problems you can submit an issue on GitHub, or
            reach me at one of the other places in the sidebar on the left.
      </p>
        </Card>
      </Main>
    );
  } else {
    if (process.browser) {
      const router = useRouter();
      router.push('/unauthorized');
    }
    return null;
  }
}

export default withLayout(AdminPage, {
  title, description, useSEO: true, path: `/admin`
});