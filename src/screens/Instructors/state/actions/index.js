import * as actionTypes from './actionTypes'

export const startFetchInstructors = (instructorsId) => ({
  type: actionTypes.STARTED_FETCH_INSTRUCTORS,
})

export const endFetchInstructors = (instructors) => ({
  type: actionTypes.ENDED_FETCH_INSTRUCTORS,
  payload: {
    instructors,
  },
})
