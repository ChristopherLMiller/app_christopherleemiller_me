import React from 'react';
import NextSEO from 'next-seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class Contact extends React.Component {
  render() {
    return (
      <>
        <NextSEO
          config={{
            title: 'ChristopherLeeMiller - Contact Me',
            description: 'Reach me with comments and questions',
            openGraph: {
              title: 'Contact Me',
              description: 'Reach me with comments and questions',
            },
          }}
        />
        <Header title="Contact Me" />

        <p>Insert contact form here for users to submit to me</p>
        <Footer />
      </>
    );
  }
}

export default Contact;
