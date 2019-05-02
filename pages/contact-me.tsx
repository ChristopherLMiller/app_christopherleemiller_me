import React from 'react';
import Card from '../components/Card';
import { withLayout } from '../components/layout/Layout';

const title = `Contact Me`;
const description = `How to reach me with any comments, questions, and concerns regarding anything you see here!`;

const ContactPage = () => (
  <main>
    <Card>
      <p>Form will be inserted here</p>
    </Card>
  </main>
);

export default withLayout(ContactPage, title, description, `/contact-me`);
