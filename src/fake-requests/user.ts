import { sleep } from '../utilities/sleep'

export const whoami = async (path: string) => {
  await sleep()
  const id = Date.now()
  const userInfo = {
    id,
    name: `name-${id}`
  }
  console.log('request: %s %s', whoami.name, path)
  return userInfo
}
