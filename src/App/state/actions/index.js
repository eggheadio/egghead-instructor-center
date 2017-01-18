import * as appActionTypes from './appActionTypes'

export const startAddUser = (token) => ({
  type: appActionTypes.STARTED_ADD_USER,
  payload: {
    token,
  },
})

export const endAddUser = ({token, user}) => ({
  type: appActionTypes.ENDED_ADD_USER,
  payload: {
    token,
    user,
  },
})

export const startRemoveUser = () => ({
  type: appActionTypes.STARTED_REMOVE_USER,
})

export const endRemoveUser = () => ({
  type: appActionTypes.ENDED_REMOVE_USER,
})

export const startShowNotification = (notification) => ({
  type: appActionTypes.STARTED_SHOW_NOTIFICATION,
  payload: {
    notification,
  },
})

export const endShowNotification = () => ({
  type: appActionTypes.ENDED_SHOW_NOTIFICATION,
  payload: {},
})
