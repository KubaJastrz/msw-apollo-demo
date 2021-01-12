import {useApolloClient} from '@apollo/client'
import {createContext, FC, useCallback, useContext, useState} from 'react'

interface User {
  id: string
  firstName: string
  lastName: string
}

interface AuthContextValue {
  isAuthorized: boolean
  login: (user: User) => void
  logout: () => void
  user: User | undefined
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthContextProvider: FC = ({children}) => {
  const {cache} = useApolloClient()

  const [isAuthorized, setIsAuthorized] = useState(false)
  const [userData, setUserData] = useState<User>()

  const login = useCallback((user: User) => {
    setIsAuthorized(!!user)
    setUserData(user)
  }, [])

  const logout = useCallback(async () => {
    setIsAuthorized(false)
    setUserData(undefined)
    await cache.reset()
  }, [cache])

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        login,
        logout,
        user: userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const value = useContext(AuthContext)
  if (!value) {
    throw new Error('useAuthContext needs to be used within AuthContextProvider tree')
  }
  return value
}
