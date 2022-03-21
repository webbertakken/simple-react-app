import firebase from 'firebase/app'
import { useState } from 'react'
import { AiOutlineClose, AiTwotoneLock } from 'react-icons/ai'
import { useAuth, AuthCheck } from 'reactfire'
import Spinner from '../atoms/Spinner/Spinner'

const loadingDelay = async (delayMs = 100) => {
  return new Promise((resolve) => setTimeout(() => resolve('loading'), delayMs))
}

const SignInSignOutButton = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const auth = useAuth()

  const signIn = async () => {
    try {
      const action = auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      const result = await Promise.race([action, loadingDelay()])
      if (result === 'loading') {
        setIsLoading(true)
      }
      await action
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    try {
      const action = auth.signOut()
      const result = await Promise.race([action, loadingDelay()])
      if (result === 'loading') {
        setIsLoading(true)
      }
      await action
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      {...props}
      className="bg-blue-800 w-60 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-row items-center justify-center space-x-1"
      onClick={auth.currentUser ? signOut : signIn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading ? (
        <>
          <Spinner />
          <span>Loading...</span>
        </>
      ) : (
        <AuthCheck
          fallback={
            <>
              <AiTwotoneLock />
              <span>Login</span>
            </>
          }
        >
          {isHovered ? (
            <>
              <AiOutlineClose color="#ff4d4f" />
              <span>Logout</span>
            </>
          ) : (
            <>
              <AiTwotoneLock color="#52c41a" />
              <span>Logged in</span>
            </>
          )}
        </AuthCheck>
      )}
    </button>
  )
}

export default SignInSignOutButton
