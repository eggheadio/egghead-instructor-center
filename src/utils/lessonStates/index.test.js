import {
  inProgressLessonStates, 
  inReviewLessonStates,
  inQueueLessonStates, 
  finishedLessonStates,
} from '.'

test('in progress', () => (
  expect(inProgressLessonStates).toEqual([
    'accepted',
    'claimed',
    'rejected',
  ])
))

test('in review', () => (
  expect(inReviewLessonStates).toEqual([
    'proposed',
    'submitted',
    'updated',
  ])
))

test('in queue', () => (
  expect(inQueueLessonStates).toEqual([
    'approved',
  ])
))

test('finished', () => (
  expect(finishedLessonStates).toEqual([
    'published',
    'flagged',
    'revised',
  ])
))
