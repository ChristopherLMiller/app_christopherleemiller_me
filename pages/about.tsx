import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `About Me`;
const description = `Where I came from and what I do now`;

const AboutPage = () => (
  <main>
    <Card>
      <p>
        There is much more content to come, this is just placeholder for the
        time being. Please check back soon. For now feel free to check out my
        old site:
      </p>
      <a href="https://www.christopherleemiller.me">Old Site</a>
    </Card>
  </main>
);

export default withLayout(AboutPage, title, description);
