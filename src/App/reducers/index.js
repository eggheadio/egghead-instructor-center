import {combineReducers} from 'redux';
import * as ApplicationActionType from '../actions/ApplicationActionType';

const instructorById = (state={}, action) => {
  console.log(action, state)
  switch(action.type) {
    case ApplicationActionType.RECEIVE_INSTRUCTOR:
      return {...state, instructor: action.payload.instructor}
    default:
      return state
  }
}

export default combineReducers({
  instructorById
});