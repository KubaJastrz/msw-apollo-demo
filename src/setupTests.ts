import '@testing-library/jest-dom'

import {server} from './mocks/test-server'

beforeAll(() => {
  server.listen({onUnhandledRequest: 'error'})
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
