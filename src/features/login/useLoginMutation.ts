import {gql, useMutation, BaseMutationOptions} from '@apollo/client'

const LOG_IN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        name
        username
      }
    }
  }
`

interface UseLoginResponse {
  user: {
    id: string
    name: string
    username: string
  }
}

interface UseLoginVariables {
  username: string
  password: string
}

interface UseLoginOptions extends BaseMutationOptions<UseLoginResponse, UseLoginVariables> {}

export const useLogin = (options?: UseLoginOptions) => {
  return useMutation<UseLoginResponse, UseLoginVariables>(LOG_IN, options)
}
