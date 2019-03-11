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

        <h2>Insert content here about me, my past, where i'm going etc</h2>
        <Footer />
      </>
    );
  }
}

export default About;
