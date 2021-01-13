import {ApolloProvider} from '@apollo/client'
import {FC} from 'react'

import {client} from './ApolloClient'
import {AuthContextProvider} from './AuthContext'

export const AppProviders: FC = ({children}) => {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ApolloProvider>
  )
}
