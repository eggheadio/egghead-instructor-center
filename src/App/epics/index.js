import {combineEpics} from 'redux-observable';
import fetchInstructorById from './fetchInstructorById'

export default combineEpics(
  fetchInstructorById
);