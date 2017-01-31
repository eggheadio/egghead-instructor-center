import {slice, indexOf} from 'lodash'

const lessonStates = [
  'proposed',
  'cancelled',
  'accepted',
  'claimed',
  'submitted',
  'rejected',
  'updated',
  'approved',
  'published',
  'flagged',
  'revised',
  'retired',
]

export default lessonStates

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
