import firebase from 'firebase/app'
import 'firebase/auth'

import { firebaseConfig } from '../firebaseConfig'

export function getFirebaseInstance() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  return firebase
}
