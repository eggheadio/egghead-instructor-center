import devQueryString from 'query-string'
import createQueryString from '../createQueryString'

export default (lessonPage) => {

  const paramNamesByEnv = process.env.REACT_APP_FAKE_API
    ? {
        page: '_page',
        size: '_limit',
      }
    : {
        page: 'page',
        size: 'size',
      }

  const params = {
    [paramNamesByEnv.page]: lessonPage.page,
    [paramNamesByEnv.size]: lessonPage.size,
    ...(lessonPage.states
      ? {state: lessonPage.states}
      : {}
    ),
  }

  const queryString = process.env.REACT_APP_FAKE_API
    ? `?${devQueryString.stringify(params)}`
    : createQueryString(params)

  return `${lessonPage.lessons_url}${queryString}`
}
