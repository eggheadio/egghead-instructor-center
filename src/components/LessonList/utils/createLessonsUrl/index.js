import createQueryString from './utils/createQueryString'

export default ({
  states,
  pageSize,
  page,
  lessons_url, 
}) => {

  const params = {
    'page': page,
    'size': pageSize,
    ...(states
      ? {state: states}
      : {}
    ),
  }

  const queryString = createQueryString(params)

  const lessonsUrl = lessons_url
      ? lessons_url
      : `${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons`

  return `${lessonsUrl}${queryString}`
}
