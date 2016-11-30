import lessonPage from '.'
import {startUpdateLessonState} from '../actions'

test('lessons are updated with a new lesson state when it fits in the current states', () => {
  const stateFixture = {
    lessonPage: {
      states: ['claimed', 'submitted'],
      total: '2',
      lessons: [
        {
          id: 'a',
          state: 'accepted',
        },
      ],
    }
  }
  expect(lessonPage(stateFixture, startUpdateLessonState({
    instructorId: '1',
    lesson: {
      id: 'a',
    },
    newState: 'submitted',
  }))).toBe({
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
