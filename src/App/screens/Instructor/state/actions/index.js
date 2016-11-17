import * as instructorActionTypes from './instructorActionTypes'

export const receiveInstructor = (instructor) => ({
  type: instructorActionTypes.RECEIVE_INSTRUCTOR,
  payload: {
    instructor
  },
})

export const requestInstructor = (instructor_id) => ({
  type: instructorActionTypes.REQUESTED_INSTRUCTOR,
  payload: {
    instructor_id
  },
})

export const receiveInstructorLessons = (lessons) => ({
  type: instructorActionTypes.RECEIVE_LESSONS_FOR_INSTRUCTOR,
  payload: {
    lessons
  },
})

export const requestInstructorLessons = (lessonPage) => ({
  type: instructorActionTypes.REQUESTED_LESSONS_FOR_INSTRUCTOR,
  payload: {
    lessonPage
  },
})
