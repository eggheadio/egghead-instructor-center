import * as appActionTypes from './appActionTypes'

export const addUser = (token) => ({
  type: appActionTypes.ADD_USER,
  payload: {
    token,
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
