import Head from "next/head";

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#982929" />

    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/logo.png" />

    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker|Roboto:100,200,300,400&display=swap"
    />
    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
  </Head>
);

export default Meta;
