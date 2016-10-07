import {headers} from './headers'
import parse from 'parse-link-header';

export function fetchInstructor(id) {
  return fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/instructors/${id}`, {
    headers
  }).then((res) => res.json())
}

export function fetchInstructorLessons(instructor, page=1, size=10) {
  return fetch(`${instructor.lessons_url}?page=${page}&size=${size}`, {
    headers
  }).then((res) => res.json().then((lessons) => {
    const pages = parse(res.headers.get('link'));
    const total = res.headers.get('x-total-count');

    return {
      pages, total, lessons
    }
  }))
}