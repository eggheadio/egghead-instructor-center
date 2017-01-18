import jwt from 'jwt-simple'
import {ENDED_ADD_USER, ENDED_REMOVE_USER} from '../actions/appActionTypes';

const defaultState = false

const cachedUser = () => {
  const cachedToken = localStorage.getItem('token')
  return cachedToken
    ? jwt.decode(cachedToken, null, true).meta
    : defaultState
}

export default (
  state = cachedUser(),
  action
) => {
  switch (action.type) {

    case ENDED_ADD_USER:
      const {user} = action.payload
      return {
        ...state,
        ...user,
      }

    case ENDED_REMOVE_USER:
      return defaultState

    default:
      return state

  }
}
