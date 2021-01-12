import {User} from 'models/User'

interface UserEntry extends User {
  password: string
}

const users: UserEntry[] = [
  {
    id: '1',
    name: 'John',
    username: 'john',
    password: 'test',
  },
]

export const userDatabase = {
  async authenticate({username, password}: {username: string; password: string}) {
    return users.find((user) => user.username === username && user.password === password)
  },
}
