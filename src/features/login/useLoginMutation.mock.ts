import {graphql} from 'msw'
import {sleep} from 'utils/common'
import {userDatabase} from 'mocks/data/users'
import {CacheObject} from 'utils/types'
import {User} from 'models/User'

export const LoginHandlers = [
  graphql.mutation('Login', async (req, res, ctx) => {
    const {username, password} = req.variables

    await sleep(1000)

    const user = await userDatabase.authenticate({username, password})

    if (!user) {
      return res(
        ctx.errors([
          {
            message: `User "${username}" not found`,
          },
        ]),
      )
    }

    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: user.id,
          name: user.name,
          username: user.username,
        } as CacheObject<User>,
      }),
    )
  }),
]
