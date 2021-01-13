import {VFC} from 'react'

import {useAuthContext} from 'app/AuthContext'

export const UserProfile: VFC = () => {
  const {user, logout} = useAuthContext()
  return (
    <div>
      <h1>Hello, {user?.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
