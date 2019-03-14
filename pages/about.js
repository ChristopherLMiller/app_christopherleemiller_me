import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class About extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title: 'ChristopherLeeMiller - About Me',
            description: 'Where I came from and what I do now',
            openGraph: {
              title: 'About Me',
              description: 'Where I came from and what I do now',
            },
          }}
        />
        <Header title="About Me" />

        <main>
          <p>Insert content here</p>
        </main>
        <Footer />
      </>
    );
  }
}

export default About;
