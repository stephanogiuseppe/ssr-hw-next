import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import withAnalytics from '../src/hocs/withAnalytics'

const Home = () => (
  <div>
    <Head>
      <title>SSR Next home</title>
    </Head>
    <img src="/static/image.png" alt="Node image"/>
    <h1>Hello World</h1>
    <Link href="/repositories"><a>Repositories</a></Link>
  </div>
)

export default withAnalytics()(Home)
