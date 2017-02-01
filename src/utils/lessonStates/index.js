import {slice, indexOf} from 'lodash'
import {
  proposedStateDescriptionText,
  cancelledStateDescriptionText,
  acceptedStateDescriptionText,
  requestedStateDescriptionText,
  claimedStateDescriptionText,
  submittedStateDescriptionText,
  rejectedStateDescriptionText,
  updatedStateDescriptionText,
  approvedStateDescriptionText,
  publishedStateDescriptionText,
  flaggedStateDescriptionText,
  revisedStateDescriptionText,
  retiredStateDescriptionText,
} from 'utils/text'

const lessonStates = [
  'proposed',
  'cancelled',
  'accepted',
  'requested',
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
  indexOf(lessonStates, 'proposed'),
  indexOf(lessonStates, 'published')
)

export const publishedLessonStates = slice(
  lessonStates,
  indexOf(lessonStates, 'published')
)

export const statusByLessonState = {
  proposed: {
    description: proposedStateDescriptionText,
  },
  cancelled: {
    requiresUserAction: true,
    description: cancelledStateDescriptionText,
  },
  accepted: {
    requiresUserAction: true,
    description: acceptedStateDescriptionText,
  },
  requested: {
    requiresUserAction: true,
    description: requestedStateDescriptionText,
  },
  claimed: {
    requiresUserAction: true,
    description: claimedStateDescriptionText,
  },
  submitted: {
    description: submittedStateDescriptionText,
  },
  rejected: {
    requiresUserAction: true,
    description: rejectedStateDescriptionText,
  },
  updated: {
    description: updatedStateDescriptionText,
  },
  approved: {
    description: approvedStateDescriptionText,
  },
  published: {
    description: publishedStateDescriptionText,
  },
  flagged: {
    requiresUserAction: true,
    description: flaggedStateDescriptionText,
  },
  revised: {
    description: revisedStateDescriptionText,
  },
  retired: {
    description: retiredStateDescriptionText,
  },
}

