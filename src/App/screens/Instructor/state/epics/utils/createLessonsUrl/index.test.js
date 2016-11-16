import createLessonsUrl from '.'

const isRunningFakeApi = process.env.REACT_APP_FAKE_API

const turnOnFakeApi = () => {
  process.env.REACT_APP_FAKE_API = 'true'
}

const turnOffFakeApi = () => {
  delete process.env.REACT_APP_FAKE_API
}

test('creates the url for the fake API', () => {
  turnOnFakeApi()
  expect(createLessonsUrl({
    lessons_url: 'http://api',
    page: 1,
    size: 10,
    states: ['approved', 'published'],
  })).toBe('http://api?_limit=10&_page=1&state=approved&state=published')
})

test('creates the url for the real API', () => {
  turnOffFakeApi()
  expect(createLessonsUrl({
    lessons_url: 'http://api',
    page: 1,
    size: 10,
    states: ['approved', 'published'],
  })).toBe('http://api?page=1&size=10&state=approved,published')
})

isRunningFakeApi
  ? turnOnFakeApi()
  : turnOffFakeApi()
