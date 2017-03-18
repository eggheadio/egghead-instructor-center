import {keys} from 'lodash'
import {
  rejectedStateTitleText,
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

export const detailsByLessonState = {
  proposed: {
    action: cancelActionText,
    description: proposedStateDescriptionText,
    color: 'blue',
  },
  cancelled: {
    action: cancelActionText,
    description: cancelledStateDescriptionText,
    color: 'red',
  },
  accepted: {
    action: acceptActionText,
    description: acceptedStateDescriptionText,
    color: 'green',
  },
  requested: {
    action: requestActionText,
    description: requestedStateDescriptionText,
    color: 'blue',
  },
  claimed: {
    action: claimActionText,
    description: claimedStateDescriptionText,
    color: 'turquoise',
  },
  submitted: {
    action: submitActionText,
    description: submittedStateDescriptionText,
    color: 'green',
  },
  rejected: {
    action: rejectActionText,
    title: rejectedStateTitleText,
    description: rejectedStateDescriptionText,
    color: 'orange',
  },
  updated: {
    action: applyUpdateActionText,
    description: updatedStateDescriptionText,
    color: 'green',
  },
  approved: {
    action: approveActionText,
    description: approvedStateDescriptionText,
    color: 'green',
  },
  published: {
    action: publishActionText,
    description: publishedStateDescriptionText,
    color: 'green',
  },
  flagged: {
    action: flagActionText,
    description: flaggedStateDescriptionText,
    color: 'orange',
  },
  revised: {
    action: reviseActionText,
    description: revisedStateDescriptionText,
    color: 'green',
  },
  retired: {
    action: retireActionText,
    description: retiredStateDescriptionText,
    color: 'red',
  },
}

export const lessonStates = keys(detailsByLessonState)

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
