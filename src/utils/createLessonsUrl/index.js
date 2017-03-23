import createQueryString from './utils/createQueryString'

export default ({
  states,
  pageSize = 20,
  page = 1,
  lessons_url, 
}) => {

  const allLessonsUrl = `${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1/lessons`
  const lessonsUrl = lessons_url || allLessonsUrl

  const params = {
    'page': page,
    'size': pageSize,
    ...(states
      ? {state: states}
      : {}
    ),
    'sort_by': ['state', 'row_order']
  }
  const queryString = createQueryString(params)

  return `${lessonsUrl}${queryString}`
}
