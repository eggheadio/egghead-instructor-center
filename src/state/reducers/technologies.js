import {ENDED_FETCH_TECHNOLOGIES} from 'state/actions/actionTypes'

export default (
  state = false,
  action
) => {
  switch (action.type) {

    case ENDED_FETCH_TECHNOLOGIES:
      return {
        ...action.payload.technologies,
      }

    default:
      return state

  }
}
