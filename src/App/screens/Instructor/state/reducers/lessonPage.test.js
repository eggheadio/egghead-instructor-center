import lessonPage from '.'
import {startUpdateLessonState} from '../actions'

test('lesson states are updated when the new state is included in the current view', () => {
  const stateFixture = {
    instructor: {},
    lessonPage: {
      states: ['claimed', 'submitted'],
      total: '2',
      lessons: [
        {
          id: 'a',
          state: 'accepted',
        },
      ],
    },
  }
  expect(lessonPage(stateFixture, startUpdateLessonState({
    instructorId: '1',
    lesson: {
      id: 'a',
    },
    newState: 'submitted',
  }))).toEqual({
    instructor: {},
    lessonPage: {
      states: ['claimed', 'submitted'],
      total: '2',
      lessons: [
        {
          id: 'a',
          state: 'submitted',
        },
      ],
    },
  })
})

test('lessons are removed when the new state is not included in the current view', () => {
  const stateFixture = {
    instructor: {},
    lessonPage: {
      states: ['accepted'],
      total: '2',
      lessons: [
        {
          id: 'a',
          state: 'accepted',
        },
        {
          id: 'b',
          state: 'accepted',
        },
      ],
    },
  }
  expect(lessonPage(stateFixture, startUpdateLessonState({
    instructorId: '1',
    lesson: {
      id: 'a',
    },
    newState: 'claimed',
  }))).toEqual({
    instructor: {},
    lessonPage: {
      states: ['accepted'],
      total: '1',
      lessons: [
        {
          id: 'b',
          state: 'accepted',
        },
      ],
    },
  })
})
