import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs';
import parse from 'parse-link-header';
import * as InstructorScreenActionType from '../actions/InstructorScreenActionType';

import {receiveInstructorLessons} from '../actions';

export const headers = {
  "Authorization": `Bearer ${process.env.REACT_APP_EGGHEAD_JWT}`,
  "Content-Type": "application/json"
};

export default function fetchLessonsForInstructor(action$) {
  return action$.ofType(InstructorScreenActionType.REQUESTED_LESSONS_FOR_INSTRUCTOR)
    .map(action => action.payload.lessonPage)
    .switchMap(lessonPage => Observable.fromPromise(fetch(`${lessonPage.lessons_url}?page=${lessonPage.page}&size=${lessonPage.size}`, {
        headers
      }).then((res) => res.json().then((lessons) => {
        const pages = parse(res.headers.get('link'));
        const total = res.headers.get('x-total-count');

        return {
          pages, total, lessons
        }
      })))
        .map(receiveInstructorLessons.bind(null))
    );
}