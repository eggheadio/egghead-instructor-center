import {ENDED_FETCH_LESSON} from 'state/actions/appActionTypes';

export default (
  state = false,
  action
) => {
  switch (action.type) {

    case ENDED_FETCH_LESSON:
      return [
        ...state,
        action.payload.lesson,
      ]

    default:
      return state

  }
}
