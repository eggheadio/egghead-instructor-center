import {ADD_NOTIFICATION, REMOVE_NOTIFICATION} from '../actions/appActionTypes';

export default (
  state = {},
  action
) => {
  switch (action.type) {

    case ADD_NOTIFICATION:
      const {notification} = action.payload
      return {
        isActive: true,
        ...notification,
      }

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        isActive: false,
      }

    default:
      return state

  }
}

