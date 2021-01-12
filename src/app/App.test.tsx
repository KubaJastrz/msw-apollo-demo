import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {App} from './App'
import {AppProviders} from './AppProviders'

jest.useFakeTimers('modern')

it('handles log in and log out flow', async () => {
  render(
    <AppProviders>
      <App />
    </AppProviders>,
  )

  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)
  const loginButton = screen.getByRole('button')

  userEvent.type(username, 'john')
  userEvent.type(password, 'test')
  loginButton.click()

  await waitFor(() => {
    expect(screen.getByText('Hello, John!')).toBeInTheDocument()
  })

  const logoutButton = screen.getByText(/logout/i)
  logoutButton.click()

  await waitFor(() => {
    expect(screen.queryByText('Hello, John!')).not.toBeInTheDocument()
  })
})
