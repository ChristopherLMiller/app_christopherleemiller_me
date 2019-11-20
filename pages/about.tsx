import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/withLayout';
import { Main } from '../styles/Generics';
import { getAuth } from '../utils/functions/AuthChecker';

const title = `About Me`;
const description = `Where I came from and what I do now`;

export const auth = {
  isSecure: false
};

const AboutPage = () => {
  getAuth();

  return (
    <Main>
      <Card heading="How I got my start">
        <p>
          Back in highschool I picked up a book on programming, took a class in
          QBasic (yikes!) and decided this is what I wanted to do. I enjoyed every
          second of it, but what exactly I wanted to do I didn't know.
      </p>
      </Card>
    </Main>
  );
}
export default withLayout(AboutPage, { title, description, useSEO: true, path: `/about` });
