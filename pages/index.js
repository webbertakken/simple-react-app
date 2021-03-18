import useSWR from 'swr'
import Link from 'next/link'
import { useUser } from 'reactfire'

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

const Index = () => {
  // const { data: user } = useUser()
  // const token = await user.getIdToken()
  //
  // const { data, error } = useSWR(user ? ['/api/getFood', token] : null, fetcher)
  if (true) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    )
  }

  return (
    <div>
      <div>
        <p>You're signed in. Email: {user.email}</p>
        <p
          style={{
            display: 'inline-block',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => {}}
        >
          Log out
        </p>
      </div>
      <div>
        <Link href={'/example'}>
          <a>Another example page</a>
        </Link>
      </div>
      {error && <div>Failed to fetch food! {error.message}</div>}
      {data && !error ? <div>Your favorite food is {data.food}.</div> : <div>Loading...</div>}
    </div>
  )
}

export default Index
