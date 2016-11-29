import * as instructorActionTypes from './instructorActionTypes'

export const startFetchInstructor = (instructorId) => ({
  type: instructorActionTypes.STARTED_FETCH_INSTRUCTOR,
  payload: {
    instructorId
  },
})

export const endFetchInstructor = (instructor) => ({
  type: instructorActionTypes.ENDED_FETCH_INSTRUCTOR,
  payload: {
    instructor
  },
})

export const startFetchInstructorLessons = (lessonOptions) => ({
  type: instructorActionTypes.STARTED_FETCH_INSTRUCTOR_LESSONS,
  payload: {
    lessonOptions
  },
})

export const endFetchInstructorLessons = (lessonPage) => ({
  type: instructorActionTypes.ENDED_FETCH_INSTRUCTOR_LESSONS,
  payload: {
    lessonPage
  },
})

export const startFetchAllLessons = (lessonOptions) => ({
  type: instructorActionTypes.STARTED_FETCH_ALL_LESSONS,
  payload: {
    lessonOptions,
  },
})

export const endFetchAllLessons = (lessonPage) => ({
  type: instructorActionTypes.ENDED_FETCH_ALL_LESSONS,
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
