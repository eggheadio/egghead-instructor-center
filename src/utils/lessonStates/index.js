import {slice, indexOf} from 'lodash'
import {
  claimedDescriptionText,
  submittedDescriptionText,
  rejectedDescriptionText,
  updatedDescriptionText,
  approvedDescriptionText,
  publishedDescriptionText,
} from 'utils/text'

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

export const statusByLessonState = {
  claimed: {
    requiresUserAction: true,
    description: claimedDescriptionText,
  },
  submitted: {
    description: submittedDescriptionText,
  },
  rejected: {
    requiresUserAction: true,
    description: rejectedDescriptionText,
  },
  updated: {
    description: updatedDescriptionText,
  },
  approved: {
    description: approvedDescriptionText,
  },
  published: {
    description: publishedDescriptionText,
  },
}

