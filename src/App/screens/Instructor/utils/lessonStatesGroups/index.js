import lessonStates from '../lessonStates'
import {slice, indexOf} from 'lodash'

export const lessonTopicsLessonStates = slice(
  lessonStates, 
  0,
  indexOf(lessonStates, 'submitted')
)

export const unclaimedLessonTopicsLessonStates = ['accepted']

export const inProgressLessonStates = slice(
  lessonStates,
  indexOf(lessonStates, 'claimed'),
  indexOf(lessonStates, 'published')
)

export const publishedLessonStates = slice(
  lessonStates,
  indexOf(lessonStates, 'published')
)
