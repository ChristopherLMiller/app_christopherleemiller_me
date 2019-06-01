import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `About Me`;
const description = `Where I came from and what I do now`;

const AboutPage = () => (
  <main>
    <Card heading="How I got my start">
      <p>
        Back in highschool I picked up a book on programming, took a class in
        QBasic (yikes!) and decided this is what I wanted to do. I enjoyed every
        second of it, but what exactly I wanted to do I didn't know.
      </p>
    </Card>
  </main>
);

export default withLayout(AboutPage, title, description, `/about`);
