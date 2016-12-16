import {ADD_NOTIFICATION} from '../actions/appActionTypes'
import {removeNotification} from '../actions'

export default (action$) => (
  action$.ofType(ADD_NOTIFICATION)
    .delay(3000)
    .mapTo(removeNotification())
)
