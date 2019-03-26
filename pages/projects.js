import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';
import { siteTitle, separator } from '../config';

const title = 'Projects';
const description =
  'Projects I have built over the years in all the languages and tech stacks I have used.';
class ProjectsPage extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title: `${siteTitle}${separator}${title}`,
            description,
            openGraph: {
              title: `${siteTitle}${separator}${title}`,
              description,
            },
          }}
        />
        <Header title={title} description={description} />
        <main>
          <Card>
            <p>
              There is much more content to come, this is just placeholder for
              the time being. Please check back soon. For now feel free to check
              out my old site:
            </p>
            <a href="https://www.christopherleemiller.me">Old Site</a>
          </Card>
        </main>
        <Footer />
      </>
    );
  }
}

export default ProjectsPage;
