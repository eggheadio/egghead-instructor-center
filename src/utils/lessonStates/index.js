import React from 'react'
import {keys} from 'lodash'
import {Text} from 'react-localize'

export const detailsByLessonState = {
  proposed: {
    action: <Text message='lessonStates.proposed.action' />,
    description: <Text message='lessonStates.proposed.description' />,
    color: 'blue',
  },
  cancelled: {
    action: <Text message='lessonStates.cancelled.action' />,
    description: <Text message='lessonStates.cancelled.description' />,
    color: 'orange',
  },
  accepted: {
    action: <Text message='lessonStates.accepted.action' />,
    description: <Text message='lessonStates.accepted.description' />,
    color: 'green',
  },
  requested: {
    action: <Text message='lessonStates.requested.action' />,
    description: <Text message='lessonStates.requested.description' />,
    color: 'blue',
  },
  claimed: {
    action: <Text message='lessonStates.claimed.action' />,
    description: <Text message='lessonStates.claimed.description' />,
    color: 'green',
  },
  submitted: {
    action: <Text message='lessonStates.submitted.action' />,
    description: <Text message='lessonStates.submitted.description' />,
    color: 'green',
  },
  rejected: {
    action: <Text message='lessonStates.rejected.action' />,
    description: <Text message='lessonStates.rejected.description' />,
    title: <Text message='lessonStates.rejected.title' />,
    color: 'orange',
  },
  updated: {
    action: <Text message='lessonStates.updated.action' />,
    description: <Text message='lessonStates.updated.description' />,
    color: 'green',
  },
  approved: {
    action: <Text message='lessonStates.approved.action' />,
    description: <Text message='lessonStates.approved.description' />,
    color: 'green',
  },
  published: {
    action: <Text message='lessonStates.published.action' />,
    description: <Text message='lessonStates.published.description' />,
    color: 'green',
  },
  flagged: {
    action: <Text message='lessonStates.flagged.action' />,
    description: <Text message='lessonStates.flagged.description' />,
    color: 'orange',
  },
  revised: {
    action: <Text message='lessonStates.revised.action' />,
    description: <Text message='lessonStates.revised.description' />,
    color: 'green',
  },
  retired: {
    action: <Text message='lessonStates.retired.action' />,
    description: <Text message='lessonStates.retired.description' />,
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
