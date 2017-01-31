import {ENDED_FETCH_INSTRUCTORS} from '../actions/actionTypes'

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