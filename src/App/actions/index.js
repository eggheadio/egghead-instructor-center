import * as ApplicationActionType from './ApplicationActionType';

export function receiveInstructor(instructor) {
  return {
    type: ApplicationActionType.RECEIVE_INSTRUCTOR,
    payload: {
      instructor
    }
  };
}

export function requestInstructor(instructor_id) {
  return {
    type: ApplicationActionType.REQUESTED_INSTRUCTOR,
    payload: {
      instructor_id
    }
  };
}