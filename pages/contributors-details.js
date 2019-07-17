import React from 'react'
import axios from 'axios'
import Link from 'next/link'

import withAnalytics from '~/hocs/withAnalytics'

const ContributorsDetail = ({ contributors }) => (
  <div>
    <h1>ured-beckend</h1>
    <h2>Contributors</h2>
    { contributors.map( contributor => (
      <div key={ contributor.id }>
        <h3>{ contributors.login }</h3>
        <p></p>
        <img src="https://avatars3.githubusercontent.com/u/22393562?v=4" alt="Avatar" width="200" />
        <a href="https://api.github.com/users/stephanogiuseppe">GitHub</a>
      </div>
    )) }
    <Link href="/"><a>Home</a></Link>
    <Link href="/repositories"><a>Back</a></Link>
  </div>
)

ContributorsDetail.getInitialProps = async ({ query }) => {
  const contributors = await axios
    .get(`https://api.github.com/repos/stephanogiuseppe/${ query.repo }/contributors`)

  return { contributors: contributors.data }
}

export default withAnalytics()(ContributorsDetail)