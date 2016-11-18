import createLessonsUrl from '.'

const isRunningFakeApi = process.env.REACT_APP_FAKE_API

const turnOnFakeApi = () => {
  process.env.REACT_APP_FAKE_API = 'true'
}

const turnOffFakeApi = () => {
  delete process.env.REACT_APP_FAKE_API
}

const optionsFixture = {
  page: 1,
  size: 10,
  states: ['approved', 'published'],
}

const instructorUrlFixture = 'http://localhost:4000/api/v1/instructors/0/lessons'

test('instructor lessons with fake API', () => {
  turnOnFakeApi()
  expect(createLessonsUrl({
    ...optionsFixture,
    lessons_url: instructorUrlFixture,
  })).toBe(`${instructorUrlFixture}?_limit=10&_page=1&state=approved&state=published`)
})

test('all lessons with fake API', () => {
  turnOnFakeApi()
  expect(createLessonsUrl({
    ...optionsFixture,
  })).toBe(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/lessons?_limit=10&_page=1&state=approved&state=published`)
})

test('instructor lessons with real APIs', () => {
  turnOffFakeApi()
  expect(createLessonsUrl({
    ...optionsFixture,
    lessons_url: instructorUrlFixture,
  })).toBe(`${instructorUrlFixture}?page=1&size=10&state=approved,published`)
})

test('all instructor lessons with real APIs', () => {
  turnOffFakeApi()
  expect(createLessonsUrl({
    ...optionsFixture,
  })).toBe(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/lessons?page=1&size=10&state=approved,published`)
})

isRunningFakeApi
  ? turnOnFakeApi()
  : turnOffFakeApi()
