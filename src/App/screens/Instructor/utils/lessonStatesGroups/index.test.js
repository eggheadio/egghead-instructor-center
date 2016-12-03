import {
  topicsLessonStates,
  unclaimedTopicsLessonStates,
  inProgressLessonStates,
  publishedLessonStates,
} from '.'

test('topics', () => (
  expect(topicsLessonStates).toEqual([
    'proposed',
    'cancelled',
    'accepted',
    'claimed',
  ])
))

test('unclaimed topics', () => (
  expect(unclaimedTopicsLessonStates).toEqual([
    'accepted',
  ])
))

test('in progress', () => (
  expect(inProgressLessonStates).toEqual([
    'claimed',
    'submitted',
    'rejected',
    'updated',
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
