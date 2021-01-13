import {VFC} from 'react'

import {LoginForm} from 'features/login'
import {UserProfile} from 'features/profile'

import {useAuthContext} from './AuthContext'
import classes from './App.module.css'

export const App: VFC = () => {
  const {isAuthorized} = useAuthContext()
  return <div className={classes.app}>{isAuthorized ? <AuthorizedApp /> : <UnauthorizedApp />}</div>
}

const AuthorizedApp: VFC = () => {
  return <UserProfile />
}

const UnauthorizedApp: VFC = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}
