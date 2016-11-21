import {
  lessonTopicsLessonStates,
  unclaimedLessonTopicsLessonStates,
  inProgressLessonStates,
  publishedLessonStates,
} from '.'

test('lesson topics', () => (
  expect(lessonTopicsLessonStates).toEqual([
    'proposed',
    'cancelled',
    'accepted',
    'claimed',
  ])
))

test('unclaimed lesson topics', () => (
  expect(unclaimedLessonTopicsLessonStates).toEqual([
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
