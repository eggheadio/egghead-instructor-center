import jwt from 'jwt-simple'
import {ENDED_FETCH_USER} from '../actions/appActionTypes';

const cachedUser = () => {
  const cachedToken = localStorage.getItem('token')
  return cachedToken
    ? jwt.decode(cachedToken, null, true).meta
    : false
}

export default (
  state = cachedUser(),
  action
) => {
  switch (action.type) {

    case ENDED_FETCH_USER:
      const {user} = action.payload
      return {
        ...state,
        ...user,
      }

    default:
      return state

  }
}

