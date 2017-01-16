import jwt from 'jwt-simple'
import {ADD_USER} from '../actions/appActionTypes';

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

    default:
      return state

  }
}

