import {
  requestedLessonStates,
  inProgressLessonStates,
  publishedLessonStates,
} from '.'

test('requested lessons', () => (
  expect(requestedLessonStates).toEqual([
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
