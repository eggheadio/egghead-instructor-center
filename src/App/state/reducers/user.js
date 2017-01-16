import jwt from 'jwt-simple'
import {ADD_USER, REMOVE_USER} from '../actions/appActionTypes';

const decodeUser = token => jwt.decode(token, null, true).meta

const cachedUser = () => {
  const cachedToken = localStorage.getItem('token')
  return cachedToken
    ? decodeUser(cachedToken)
    : false
}

export default (
  state = cachedUser(),
  action
) => {
  switch (action.type) {

    case ADD_USER:
      const {token} = action.payload
      localStorage.setItem('token', token)
      window.location.reload()
      return {
        ...state,
        ...decodeUser(token),
      }

    case REMOVE_USER:
      localStorage.removeItem('token')
      window.location.reload()
      return state

    default:
      return state

  }
}

