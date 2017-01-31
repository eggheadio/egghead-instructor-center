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

export const lessonStateUrls = {
  'cancelled': 'cancel_url',
  'accepted': 'accept_url',
  'claimed': 'claim_url',
  'submitted': 'submit_url',
  'rejected': 'reject_url',
  'updated': 'apply_update_url',
  'approved': 'approve_url',
  'published': 'publish_url',
  'flagged': 'flag_url',
  'revised': 'revise_url',
  'retired': 'retire_url',
}
