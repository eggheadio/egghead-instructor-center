import {slice, indexOf, without} from 'lodash'
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
  cancelActionText,
  acceptActionText,
  requestActionText,
  claimActionText,
  submitActionText,
  rejectActionText,
  applyUpdateActionText,
  approveActionText,
  publishActionText,
  flagActionText,
  reviseActionText,
  retireActionText,
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

export const inProgressLessonStates = without(slice(
  lessonStates,
  indexOf(lessonStates, 'proposed'),
  indexOf(lessonStates, 'approved')
), 'cancelled')

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

export const actionByLessonState = {
  cancel: {
    title: cancelActionText,
  },
  accept: {
    title: acceptActionText,
  },
  request: {
    title: requestActionText,
  },
  claim: {
    title: claimActionText,
  },
  submit: {
    title: submitActionText,
  },
  reject: {
    title: rejectActionText,
  },
  apply_update: {
    title: applyUpdateActionText,
  },
  approve: {
    title: approveActionText,
  },
  publish: {
    title: publishActionText,
  },
  flag: {
    title: flagActionText,
  },
  revise: {
    title: reviseActionText,
  },
  retire: {
    title: retireActionText,
  },
}
