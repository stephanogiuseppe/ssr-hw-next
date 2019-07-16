import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const Repositories = ({ repositories }) => (
  <div>
    <ul>
      { repositories.map(repository => (
        <li key={ repository.id }>{ repository.name }</li>
      )) }
    </ul>
    <Link href="/"><a>Back</a></Link>
  </div>
)

Repositories.getInitialProps = async () => {
  const repositories = await axios.get('https://api.github.com/orgs/nodejs/repos')

  return { repositories: repositories.data }
}

export default Repositories
