const isRunningFakeApi = process.env.REACT_APP_FAKE_API

export const turnOn = () => {
  process.env.REACT_APP_FAKE_API = 'true'
}

export const turnOff = () => {
  delete process.env.REACT_APP_FAKE_API
}

export const reset = () => {
  isRunningFakeApi
    ? turnOn()
    : turnOff()
}
