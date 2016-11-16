import reduce from 'lodash/reduce'
import replace from 'lodash/replace'
import isArray from 'lodash/isArray'

export default (params) => (
  replace(reduce(params, (memo, value, key) => (
    `${memo}&${key}=${isArray(value) ? value.join(',') : value}`
  ), ''), '&', '?')
)
