import {ENDED_FETCH_INSTRUCTORS} from 'screens/Admin/state/actions/adminActionTypes';

export default (
  state = false,
  action
) => {
  switch (action.type) {

    case ENDED_FETCH_INSTRUCTORS:
      return [
        ...action.payload.instructors,
      ]

    default:
      return state

  }
}
