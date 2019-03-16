import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card } from '../components/cards';

const title = 'Christopher Lee Miller - About Me';
const description = 'Where I came from and what I do now';
class About extends React.Component {
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
        <Header title="About Me" />

        <main>
          <Card
            title="Coming Soon"
            image="https://res.cloudinary.com/christopherleemiller/image/upload/v1552772195/clm_me/coming_soon.png"
          >
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

export default About;
