import SignInSignOutButton from '../components/auth/SignInSignOutButton'
import Page from '../components/Page'

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

const Index = () => (
  <Page>
    <h1 className="text-xl font-semibold pb-8">Simple react app</h1>
    <SignInSignOutButton />
  </Page>
)

export default Index
