import jwt from 'jwt-simple'
import {ENDED_FETCH_USER} from '../actions/appActionTypes';

const cachedUser = () => {
  const cachedToken = localStorage.getItem('token')
  console.log('cachedToken', cachedToken)
  return jwt.decode(cachedToken, null, true).meta
}

export default (
  state = cachedUser() || false,
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

