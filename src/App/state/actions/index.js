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

export const addNotification = (notification) => ({
  type: appActionTypes.ADD_NOTIFICATION,
  payload: {
    notification,
  },
})

export const removeNotification = () => ({
  type: appActionTypes.REMOVE_NOTIFICATION,
  payload: {},
})
