import {keys} from 'lodash'
import {Text} from 'react-localize'

export const detailsByLessonState = {
  proposed: {
    action: cancelActionText,
    description: proposedStateDescriptionText,
    color: 'blue',
  },
  cancelled: {
    action: cancelActionText,
    description: cancelledStateDescriptionText,
    color: 'orange',
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
    color: 'green',
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
    color: 'orange',
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
