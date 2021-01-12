import {VFC} from 'react'
import {useForm} from 'react-hook-form'
import {Stack} from 'common/Layout'
import classes from './LoginForm.module.css'
import {useLogin} from './useLoginMutation'
import {useAuthContext} from 'app/AuthContext'

interface FormData {
  username: string
  password: string
}

export const LoginForm: VFC = () => {
  const authContext = useAuthContext()

  const {register, handleSubmit} = useForm<FormData>()

  const [login, {loading, error}] = useLogin({
    onError: () => {},
  })

  const handleLogin = ({username, password}: FormData) => {
    login({
      variables: {
        username,
        password,
      },
    }).then((result) => {
      if (result?.data?.user) {
        authContext.login(result.data.user)
      }
    })
  }

  return (
    <form name="login" onSubmit={handleSubmit(handleLogin)}>
      <Stack>
        <label className={classes.inputGroup}>
          <span className={classes.inputLabel}>Username</span>
          <input type="username" name="username" ref={register()} />
        </label>
        <label className={classes.inputGroup}>
          <span className={classes.inputLabel}>Password</span>
          <input type="password" name="password" ref={register()} />
        </label>
        <button type="submit" disabled={loading}>
          Login
        </button>
        {error ? <p>{error.message}</p> : null}
      </Stack>
    </form>
  )
}
