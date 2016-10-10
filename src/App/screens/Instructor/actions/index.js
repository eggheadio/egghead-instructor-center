import * as InstructorScreenActionType from './InstructorScreenActionType';

export function receiveInstructor(instructor) {
  return {
    type: InstructorScreenActionType.RECEIVE_INSTRUCTOR,
    payload: {
      instructor
    }
  };
}

export function requestInstructor(instructor_id) {
  return {
    type: InstructorScreenActionType.REQUESTED_INSTRUCTOR,
    payload: {
      instructor_id
    }
  };
}

export function receiveInstructorLessons(lessons) {
  return {
    type: InstructorScreenActionType.RECEIVE_LESSONS_FOR_INSTRUCTOR,
    payload: {
      lessons
    }
  };
}

export function requestInstructorLessons(lessonPage) {
  return {
    type: InstructorScreenActionType.REQUESTED_LESSONS_FOR_INSTRUCTOR,
    payload: {
      lessonPage
    }
  };
}