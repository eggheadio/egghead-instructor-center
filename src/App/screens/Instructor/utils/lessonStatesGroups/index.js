import lessonStates from '../lessonStates'
import {slice, indexOf} from 'lodash'

export const requestedLessonStates = ['accepted']

export const inProgressLessonStates = slice(
  lessonStates,
  indexOf(lessonStates, 'claimed'),
  indexOf(lessonStates, 'published')
)

export const publishedLessonStates = slice(
  lessonStates,
  indexOf(lessonStates, 'published')
)
