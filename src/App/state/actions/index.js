import * as appActionTypes from './appActionTypes'

export const startFetchUser = (username, password) => ({
  type: appActionTypes.STARTED_FETCH_USER,
  payload: {
    username,
    password,
  },
})

export const endFetchUser = (user) => ({
  type: appActionTypes.ENDED_FETCH_USER,
  payload: {
    user,
  },
})
