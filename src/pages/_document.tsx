import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            // href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Averia+Libre:wght@400;700&display=swap"
            // rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Gloria+Hallelujah&family=Niconne&family=Pacifico&family=Parisienne&family=Playball&family=Sacramento&family=Satisfy&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}
