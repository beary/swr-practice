import useSwr from 'swr'
import { whoami } from '../fake-requests/user'

const UserInfo = () => {
  const { data, error } = useSwr('/whoami', whoami)
  return (
    <div>
      <strong>UserInfo</strong>
      <span>
        {error ? '😭' : JSON.stringify(data)}
      </span>
    </div>
  )
}

export const GetStart = () => (
  <div>
    <UserInfo />
    <UserInfo />
  </div>
)
