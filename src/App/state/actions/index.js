import * as appActionTypes from './appActionTypes'

export const startAddUser = (token) => ({
  type: appActionTypes.STARTED_ADD_USER,
  payload: {
    token,
  },
})

export const endAddUser = ({token, user}) => ({
  type: appActionTypes.ENDED_ADD_USER,
  payload: {
    token,
    user,
  },
})

export const startRemoveUser = () => ({
  type: appActionTypes.STARTED_REMOVE_USER,
})

export const endRemoveUser = () => ({
  type: appActionTypes.ENDED_REMOVE_USER,
})

export const startShowNotification = (notification) => ({
  type: appActionTypes.STARTED_SHOW_NOTIFICATION,
  payload: {
    notification,
  },
})

export const endShowNotification = () => ({
  type: appActionTypes.ENDED_SHOW_NOTIFICATION,
  payload: {},
})

export const startUpdateLessonState = ({
  instructorId,
  lesson,
  newState,
}) => ({
  type: appActionTypes.STARTED_UPDATE_LESSON_STATE,
  payload: {
    instructorId,
    lesson,
    newState,
  },
})

export const endUpdateLessonState = () => ({
  type: appActionTypes.ENDED_UPDATE_LESSON_STATE,
})

export const startSubmitLesson = (lesson) => ({
  type: appActionTypes.STARTED_SUBMIT_LESSON,
  payload: {lesson},
})

export const endSubmitLesson = () => ({
  type: appActionTypes.ENDED_SUBMIT_LESSON,
})

export const startFetchTechnologies = () => ({
  type: appActionTypes.STARTED_FETCH_TECHNOLOGIES,
})

export const endFetchTechnologies = (technologies) => ({
  type: appActionTypes.ENDED_FETCH_TECHNOLOGIES,
  payload: {
    technologies
  },
})

export const startFetchLesson = (lessonSlug) => ({
  type: appActionTypes.STARTED_FETCH_LESSON,
  payload: {
    lessonSlug,
  }
})

export const endFetchLesson = (lesson) => ({
  type: appActionTypes.ENDED_FETCH_LESSON,
  payload: {
    lesson
  },
})
