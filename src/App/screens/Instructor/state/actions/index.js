import * as instructorActionTypes from './instructorActionTypes'

export const requestInstructor = (instructorId) => ({
  type: instructorActionTypes.REQUESTED_INSTRUCTOR,
  payload: {
    instructorId
  },
})

export const receiveInstructor = (instructor) => ({
  type: instructorActionTypes.RECEIVED_INSTRUCTOR,
  payload: {
    instructor
  },
})

export const requestInstructorLessons = (lessonOptions) => ({
  type: instructorActionTypes.REQUESTED_INSTRUCTOR_LESSONS,
  payload: {
    lessonOptions
  },
})

export const receiveInstructorLessons = (lessonPage) => ({
  type: instructorActionTypes.RECEIVED_INSTRUCTOR_LESSONS,
  payload: {
    lessonPage
  },
})

export const requestAllLessons = (lessonOptions) => ({
  type: instructorActionTypes.REQUESTED_ALL_LESSONS,
  payload: {
    lessonOptions,
  },
})

export const receiveAllLessons = (lessonPage) => ({
  type: instructorActionTypes.RECEIVED_ALL_LESSONS,
  payload: {
    lessonPage
  },
})

export const startUpdateLessonState = ({lessonId, lessonUrl, newState}) => ({
  type: instructorActionTypes.STARTED_UPDATE_LESSON_STATE,
  payload: {
    lessonId,
    lessonUrl,
    newState,
  },
})

export const endUpdateLessonState = () => ({
  type: instructorActionTypes.ENDED_UPDATE_LESSON_STATE,
})
