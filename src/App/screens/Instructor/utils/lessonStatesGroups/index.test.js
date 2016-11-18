import {
  lessonTopicsLessonStates,
  inProgressLessonStates,
  publishedLessonStates,
} from '.'

test('in progress', () => (
  expect(inProgressLessonStates).toEqual([
    'proposed',
    'cancelled',
    'accepted',
    'claimed',
    'submitted',
    'rejected',
    'updated',
    'approved',
  ])
))

test('lesson topics', () => (
  expect(lessonTopicsLessonStates).toEqual([
    'proposed',
    'cancelled',
    'accepted',
    'claimed',
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
