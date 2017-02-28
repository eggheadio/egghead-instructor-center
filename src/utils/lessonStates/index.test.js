import {inProgressLessonStates, publishedLessonStates} from '.'

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

test('published', () => (
  expect(publishedLessonStates).toEqual([
    'published',
    'flagged',
    'revised',
    'retired',
  ])
))
