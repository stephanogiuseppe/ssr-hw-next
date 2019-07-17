import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styledComponents from 'styled-components'

import withAnalytics from '~/hocs/withAnalytics'

const Title = styledComponents.h1`color: #065`

const Home = () => (
  <div>
    <Head>
      <title>SSR Next home</title>
    </Head>
    <img src="/static/image.png" alt="Node image"/>
    <Title>Hello World</Title>
    <Link href="/repositories"><a>Repositories</a></Link>
  </div>
)

export default withAnalytics()(Home)
