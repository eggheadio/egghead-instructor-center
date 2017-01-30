import {reset, turnOn, turnOff} from 'utils/fakeApi'
import createLessonsUrl from '.'

const optionsFixture = {
  page: 1,
  pageSize: 10,
  states: ['approved', 'published'],
}

const instructorUrlFixture = 'http://localhost:4000/api/v1/instructors/0/lessons'

test('instructor lessons with fake API', () => {
  turnOn()
  expect(createLessonsUrl({
    ...optionsFixture,
    lessons_url: instructorUrlFixture,
  })).toBe(`${instructorUrlFixture}?_limit=10&_page=1&state=approved&state=published`)
})

test('all lessons with fake API', () => {
  turnOn()
  expect(createLessonsUrl(optionsFixture))
    .toBe(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons?_limit=10&_page=1&state=approved&state=published`)
})

test('instructor lessons with real APIs', () => {
  turnOff()
  expect(createLessonsUrl({
    ...optionsFixture,
    lessons_url: instructorUrlFixture,
  })).toBe(`${instructorUrlFixture}?page=1&size=10&state=approved,published`)
})

test('all instructor lessons with real APIs', () => {
  turnOff()
  expect(createLessonsUrl(optionsFixture))
    .toBe(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons?page=1&size=10&state=approved,published`)
})

reset()
