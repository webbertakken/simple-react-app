import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { getFirebaseInstance } from '../app/getFirebaseInstance'
import { setUserCookie } from '../model/user/userCookies'
import { mapUserData } from '../model/user/mapUserData'

// Init the Firebase app.
getFirebaseInstance()

const firebaseAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user } /*, redirectUrl */) => {
      const userData = await mapUserData(user)
      setUserCookie(userData)
    },
  },
}

const FirebaseAuth = () => {
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  )
}

export default FirebaseAuth
