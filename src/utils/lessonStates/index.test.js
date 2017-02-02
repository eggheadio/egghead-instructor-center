import {inProgressLessonStates, publishedLessonStates} from '.'

test('in progress', () => (
  expect(inProgressLessonStates).toEqual([
    'proposed',
    'cancelled',
    'accepted',
    'requested',
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
