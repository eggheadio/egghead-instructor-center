import devQueryString from 'query-string'
import createQueryString from '../createQueryString'

export default ({lessons_url, page, size, states}) => {

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
    [paramNamesByEnv.page]: page,
    [paramNamesByEnv.size]: size,
    ...(states
      ? {state: states}
      : {}
    ),
  }

  const queryString = process.env.REACT_APP_FAKE_API
    ? `?${devQueryString.stringify(params)}`
    : createQueryString(params)

  const lessonsUrl = lessons_url
    ? lessons_url
    : `${process.env.REACT_APP_EGGHEAD_BASE_URL}/lessons`

  return `${lessonsUrl}${queryString}`
}
