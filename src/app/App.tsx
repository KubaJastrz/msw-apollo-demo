import {VFC} from 'react'
import classes from './App.module.css'
import {LoginForm} from 'features/login'
import {UserProfile} from 'features/profile'
import {useAuthContext} from './AuthContext'

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
