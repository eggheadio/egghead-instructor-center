import {Observable} from 'rxjs'
import jwt from 'jwt-simple'
import {STARTED_FETCH_USER} from '../actions/appActionTypes'
import {endFetchUser} from '../actions'
import headers from '../../utils/headers'

const endpoint = `${process.env.REACT_APP_EGGHEAD_BASE_URL}/users/native_auth`

export default (action$) => (
  action$.ofType(STARTED_FETCH_USER)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        process.env.REACT_APP_FAKE_API
          ? fetch(endpoint)
              .then(response => response.json())
              .then(json => jwt.decode(json.jwt, null, true).meta)
              .catch(error => console.error(error))
          : fetch(endpoint, {
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
