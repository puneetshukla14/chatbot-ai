import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Medical Chatbot powered by AI" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}