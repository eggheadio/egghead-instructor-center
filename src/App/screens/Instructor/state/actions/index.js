import * as instructorActionTypes from './instructorActionTypes'

export const requestInstructor = (instructor_id) => ({
  type: instructorActionTypes.REQUESTED_INSTRUCTOR,
  payload: {
    instructor_id
  },
})

export const receiveInstructor = (instructor) => ({
  type: instructorActionTypes.RECEIVED_INSTRUCTOR,
  payload: {
    instructor
  },
})

export const requestInstructorLessons = (lessonPage) => ({
  type: instructorActionTypes.REQUESTED_INSTRUCTOR_LESSONS,
  payload: {
    lessonPage
  },
})

export const receiveInstructorLessons = (lessons) => ({
  type: instructorActionTypes.RECEIVED_INSTRUCTOR_LESSONS,
  payload: {
    lessons
  },
})

export const requestAllLessons = (lessonPage) => ({
  type: instructorActionTypes.REQUESTED_ALL_LESSONS,
  payload: {
    lessonPage
  },
})

export const receiveAllLessons = (lessons) => ({
  type: instructorActionTypes.RECEIVED_ALL_LESSONS,
  payload: {
    lessons
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
