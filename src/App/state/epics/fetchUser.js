import {Observable} from 'rxjs'
import {STARTED_FETCH_USER} from '../actions/appActionTypes'
import {endFetchUser} from '../actions'
import headers from '../../utils/headers'

export default (action$) => (
  action$.ofType(STARTED_FETCH_USER)
    .switchMap(
      ({payload}) => Observable.fromPromise(
        fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/users/native_auth`, {
          method: 'POST',
          body: JSON.stringify({
            username: payload.username,
            password: payload.password,
          }),
          headers,
        })
          .then(response => response.json())
          .then(jwt => jwt)
          .catch(error => console.error(error))
      ),
      ({payload}, {jwt}) => (
        endFetchUser(jwt.user)
      )
    )
)
