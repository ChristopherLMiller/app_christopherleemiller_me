import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

class Index extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>ChristopherLeeMiller.me - Home</title>
        </Head>
        <Header title="Christopher Lee Miller" />
        <Footer />
      </>
    );
  }
}

export default Index;
