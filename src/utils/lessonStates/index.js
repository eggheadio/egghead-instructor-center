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
    description: cancelledStateDescriptionText,
  },
  accepted: {
    description: acceptedStateDescriptionText,
  },
  requested: {
    description: requestedStateDescriptionText,
  },
  claimed: {
    description: claimedStateDescriptionText,
  },
  submitted: {
    description: submittedStateDescriptionText,
  },
  rejected: {
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

export const colorByLessonState = {
  proposed: {
    color: 'white',
  },
  cancelled: {
    color: 'red',
  },
  accepted: {
    color: 'green',
  },
  requested: {
    color: 'white',
  },
  claimed: {
    color: 'green',
  },
  submitted: {
    color: 'green',
  },
  rejected: {
    color: 'orange',
  },
  updated: {
    color: 'green',
  },
  approved: {
    color: 'green',
  },
  published: {
    color: 'green',
  },
  flagged: {
    color: 'orange',
  },
  revised: {
    color: 'green',
  },
  retired: {
    color: 'red',
  },
}

export const lessonStateVerbToPastTense = {
  propose: 'proposed',
  cancel: 'cancelled',
  accept: 'accepted',
  request: 'requested',
  claim: 'claimed',
  submit: 'submitted',
  reject: 'rejected',
  apply_update: 'updated',
  approve: 'approved',
  publish: 'published',
  flag: 'flagged',
  revise: 'revised',
  retire: 'retired',
}
