import * as actionTypes from './actionTypes'

export const startAddUser = (token) => ({
  type: actionTypes.STARTED_ADD_USER,
  payload: {
    token,
  },
})

export const endAddUser = ({token, user}) => ({
  type: actionTypes.ENDED_ADD_USER,
  payload: {
    token,
    user,
  },
})

export const startRemoveUser = () => ({
  type: actionTypes.STARTED_REMOVE_USER,
})

export const endRemoveUser = () => ({
  type: actionTypes.ENDED_REMOVE_USER,
})

export const startShowNotification = (notification) => ({
  type: actionTypes.STARTED_SHOW_NOTIFICATION,
  payload: {
    notification,
  },
})

export const endShowNotification = () => ({
  type: actionTypes.ENDED_SHOW_NOTIFICATION,
  payload: {},
})

export const startUpdateLessonState = ({
  lesson,
  newState,
}) => ({
  type: actionTypes.STARTED_UPDATE_LESSON_STATE,
  payload: {
    lesson,
    newState,
  },
})

export const endUpdateLessonState = () => ({
  type: actionTypes.ENDED_UPDATE_LESSON_STATE,
})

export const startSubmitLesson = (lesson) => ({
  type: actionTypes.STARTED_SUBMIT_LESSON,
  payload: {lesson},
})

export const endSubmitLesson = () => ({
  type: actionTypes.ENDED_SUBMIT_LESSON,
})

export const startFetchTechnologies = () => ({
  type: actionTypes.STARTED_FETCH_TECHNOLOGIES,
})

export const endFetchTechnologies = (technologies) => ({
  type: actionTypes.ENDED_FETCH_TECHNOLOGIES,
  payload: {
    technologies
  },
})

export const startFetchLesson = (lessonSlug) => ({
  type: actionTypes.STARTED_FETCH_LESSON,
  payload: {
    lessonSlug,
  }
})

export const endFetchLesson = (lesson) => ({
  type: actionTypes.ENDED_FETCH_LESSON,
  payload: {
    lesson
  },
})

export const startFetchAllLessons = (lessonOptions) => ({
  type: actionTypes.STARTED_FETCH_ALL_LESSONS,
  payload: {
    lessonOptions,
  },
})

export const endFetchAllLessons = (lessonPage) => ({
  type: actionTypes.ENDED_FETCH_ALL_LESSONS,
  payload: {
    lessonPage
  },
})

export const startFetchInstructor = (appId) => ({
  type: actionTypes.STARTED_FETCH_INSTRUCTOR,
  payload: {
    appId
  },
})

export const endFetchInstructor = (app) => ({
  type: actionTypes.ENDED_FETCH_INSTRUCTOR,
  payload: {
    app
  },
})

export const startFetchInstructorLessons = (lessonOptions) => ({
  type: actionTypes.STARTED_FETCH_INSTRUCTOR_LESSONS,
  payload: {
    lessonOptions
  },
})

export const endFetchInstructorLessons = (lessonPage) => ({
  type: actionTypes.ENDED_FETCH_INSTRUCTOR_LESSONS,
  payload: {
    lessonPage
  },
})
