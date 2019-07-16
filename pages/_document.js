import Document, { Head, Main, NextScript } from 'next/document'

export default class NextDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{ `body { background: #FEFEFE }` }</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
