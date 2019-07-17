import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

import withAnalytics from '~/hocs/withAnalytics'

const Repositories = ({ repositories }) => (
  <div>
    <Head>
      <title>Stéphano's repositories</title>
    </Head>
    <h2>Stéphano's Repositories</h2>
    <ul>
      { repositories.map(repository => (
        <li key={ repository.id }>
          <Link href={`/repositories/${ repository.name }/contributors`}>
            <a>{ repository.name }</a>
          </Link>
        </li>
      )) }
    </ul>
    <Link href="/"><a>Back</a></Link>
  </div>
)

Repositories.getInitialProps = async () => {
  const repositories = await axios.get('https://api.github.com/users/stephanogiuseppe/repos')

  return { repositories: repositories.data }
}

export default withAnalytics()(Repositories)
