import * as appActionTypes from './appActionTypes'

export const startFetchUser = ({email, password}) => ({
  type: appActionTypes.STARTED_FETCH_USER,
  payload: {
    email,
    password,
  },
})

export const endFetchUser = (user) => ({
  type: appActionTypes.ENDED_FETCH_USER,
  payload: {
    user,
  },
})
