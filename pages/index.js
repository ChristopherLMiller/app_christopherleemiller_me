import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/Card';

const title = 'Christopher Lee Miller - Home';
const description =
  'Where I came from and what I do now.  Development resources, services offered, photography, and much more.';
class Index extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title,
            description,
            openGraph: {
              title,
              description,
            },
          }}
        />
        <Header title="Home" />
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

export default Index;
