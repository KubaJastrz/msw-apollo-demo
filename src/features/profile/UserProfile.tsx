import {useAuthContext} from 'app/AuthContext'
import {VFC} from 'react'

export const UserProfile: VFC = () => {
  const {user, logout} = useAuthContext()
  return (
    <div>
      <h1>Hello, {user?.firstName}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
