import React from 'react';
import Head from 'next/head';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class About extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>ChristopherLeeMiller.me - About</title>
        </Head>
        <NextSEO
          config={{
            title: 'About Me',
            description: 'Where I came from and what I do now',
            openGraph: {
              title: 'About Me',
              description: 'Where I came from and what I do now',
            },
          }}
        />
        <Header title="About Me" />
        <Footer />
      </>
    );
  }
}

export default About;
