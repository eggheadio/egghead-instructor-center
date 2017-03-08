import {inProgressLessonStates, inQueueLessonStates, publishedLessonStates} from '.'

test('in progress', () => (
  expect(inProgressLessonStates).toEqual([
    'proposed',
    'accepted',
    'requested',
    'claimed',
    'submitted',
    'rejected',
    'updated',
  ])
))

test('in queue', () => (
  expect(inQueueLessonStates).toEqual([
    'approved',
  ])
))

test('published', () => (
  expect(publishedLessonStates).toEqual([
    'published',
    'flagged',
    'revised',
    'retired',
  ])
))
