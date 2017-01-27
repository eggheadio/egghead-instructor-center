import {STARTED_SHOW_NOTIFICATION, ENDED_SHOW_NOTIFICATION} from 'state/actions/appActionTypes';

export default (
  state = {},
  action
) => {
  switch (action.type) {

    case STARTED_SHOW_NOTIFICATION:
      const {notification} = action.payload
      return {
        isActive: true,
        ...notification,
      }

    case ENDED_SHOW_NOTIFICATION:
      return {
        ...state,
        isActive: false,
      }

    default:
      return state

  }
}

