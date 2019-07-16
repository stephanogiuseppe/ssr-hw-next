import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>SSR Next home</title>
    </Head>
    <h1>Hello World</h1>
    <Link href="/repositories"><a>Repositories</a></Link>
  </div>
)

export default Home
