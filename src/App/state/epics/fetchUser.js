import {Observable} from 'rxjs'
import jwt from 'jwt-simple'
import {STARTED_FETCH_USER} from '../actions/appActionTypes'
import {endFetchUser, addNotification} from '../actions'
import headers from '../../utils/headers'

const endpoint = `${process.env.REACT_APP_EGGHEAD_BASE_URL}/users/native_auth`

export default (action$, store) => (
  action$.ofType(STARTED_FETCH_USER)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        process.env.REACT_APP_FAKE_API
          ? fetch(endpoint)
              .then(response => {
                if (!response.ok) {
                  throw Error(`Fetching your user data failed - error message: ${response.statusText}`);
                }
                return response
              })
              .then(response => response.json())
              .then(json => jwt.decode(json.jwt, null, true).meta)
              .catch(error => {
                store.dispatch(
                  addNotification({
                    type: 'error',
                    message: error.message,
                  })
                )
              })
          : fetch(endpoint, {
              method: 'POST',
              body: JSON.stringify({
                email: payload.email,
                password: payload.password,
              }),
              headers,
            })
              .then(response => {
                if (response.status === 401) {
                  throw Error('Wrong email or password');
                }
                else if (!response.ok) {
                  throw Error(`Fetching your user data failed - error message: ${response.statusText}`);
                }
                return response
              })
              .then(response => response.text())
              .then(token => jwt.decode(token, null, true).meta)
              .catch(error => {
                store.dispatch(
                  addNotification({
                    type: 'error',
                    message: error.message,
                  })
                )
              })
      ),
      ({payload}, user) => (
        endFetchUser(user)
      )
    )
)
