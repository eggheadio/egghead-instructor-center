import lessonStates from '../lessonStates'
import {slice, indexOf} from 'lodash'

export const topicsLessonStates = slice(
  lessonStates, 
  0,
  indexOf(lessonStates, 'submitted')
)

export const unclaimedTopicsLessonStates = ['accepted']

export const inProgressLessonStates = slice(
  lessonStates,
  indexOf(lessonStates, 'claimed'),
  indexOf(lessonStates, 'published')
)

export const publishedLessonStates = slice(
  lessonStates,
  indexOf(lessonStates, 'published')
)
