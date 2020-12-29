import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../app/apollo'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`

const Apollo = () => {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery)

  return (
    <div>
      You're (fake) signed in as {viewer.name} and you're {viewer.status} goto{' '}
      <Link href="/example">
        <a>static</a>
      </Link>{' '}
      page.
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ViewerQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Apollo
