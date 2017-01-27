import * as adminActionTypes from './adminActionTypes'

export const startFetchInstructors = (adminId) => ({
  type: adminActionTypes.STARTED_FETCH_INSTRUCTORS,
})

export const endFetchInstructors = (instructors) => ({
  type: adminActionTypes.ENDED_FETCH_INSTRUCTORS,
  payload: {
    instructors,
  },
})
