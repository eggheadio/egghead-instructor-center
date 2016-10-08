import {headers} from './headers'

export function fetchLessons(page=1, size=5) {
  return fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/lessons?size=${size}&page=${page}`, {
    headers
  }).then((res) => res.json())
}