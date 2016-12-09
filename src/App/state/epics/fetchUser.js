import {Observable} from 'rxjs'
import jwt from 'jwt-simple'
import {STARTED_FETCH_USER} from '../actions/appActionTypes'
import {endFetchUser} from '../actions'
import headers from '../../utils/headers'

export default (action$) => (
  action$.ofType(STARTED_FETCH_USER)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`http://localhost:5000/users/native_auth`, {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
          headers,
        })
          .then(response => response.text())
          .then(token => jwt.decode(token, null, true).meta)
          .catch(error => console.error(error))
      ),
      ({payload}, user) => (
        endFetchUser(user)
      )
    )
)
