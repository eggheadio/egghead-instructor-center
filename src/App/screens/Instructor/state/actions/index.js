import * as instructorActionTypes from './instructorActionTypes'

export function receiveInstructor(instructor) {
  return {
    type: instructorActionTypes.RECEIVE_INSTRUCTOR,
    payload: {
      instructor
    }
  }
}

export function requestInstructor(instructor_id) {
  return {
    type: instructorActionTypes.REQUESTED_INSTRUCTOR,
    payload: {
      instructor_id
    }
  }
}

export function receiveInstructorLessons(lessons) {
  return {
    type: instructorActionTypes.RECEIVE_LESSONS_FOR_INSTRUCTOR,
    payload: {
      lessons
    }
  }
}

export function requestInstructorLessons(lessonPage) {
  return {
    type: instructorActionTypes.REQUESTED_LESSONS_FOR_INSTRUCTOR,
    payload: {
      lessonPage
    }
  }
}
