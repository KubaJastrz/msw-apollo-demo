import {graphql} from 'msw'
import {sleep} from 'utils/common'

export const LoginHandlers = [
  graphql.mutation('Login', async (req, res, ctx) => {
    const {username} = req.variables

    await sleep(1000)

    if (username === 'invalid') {
      return res(
        ctx.errors([
          {
            message: 'User not found',
            extensions: {
              id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
            },
          },
        ]),
      )
    }

    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
          firstName: 'John',
          lastName: 'Maverick',
        },
      }),
    )
  }),
]
