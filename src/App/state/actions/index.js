import * as appActionTypes from './appActionTypes'

export const addUser = (token) => ({
  type: appActionTypes.ADD_USER,
  payload: {
    token,
  },
})

export const removeUser = () => ({
  type: appActionTypes.REMOVE_USER,
  payload: {},
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
