import createQueryString from '../createQueryString'

export default ({
  lessons_url, 
  page,
  pageSize,
  states,
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

  return `${lessons_url}${queryString}`
}
