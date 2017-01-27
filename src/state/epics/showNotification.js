import {STARTED_SHOW_NOTIFICATION} from 'state/actions/appActionTypes'
import {endShowNotification} from 'state/actions'

export default (action$) => (
  action$.ofType(STARTED_SHOW_NOTIFICATION)
    .delay(3000)
    .mapTo(endShowNotification())
)
