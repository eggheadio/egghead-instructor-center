import jwt from 'jwt-simple'
import {STARTED_ADD_USER} from 'state/actions/actionTypes'
import {endAddUser} from 'state/actions'

export default (action$) => (
  action$.ofType(STARTED_ADD_USER)
    .map(({payload}) => {
      localStorage.setItem('token', payload.token)
      return endAddUser({
        token: payload.token,
        user: jwt.decode(payload.token, null, true).meta
      })
    })
)
