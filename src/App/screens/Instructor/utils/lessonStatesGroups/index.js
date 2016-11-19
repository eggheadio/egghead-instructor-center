import lessonStates from '../lessonStates'
import {slice, indexOf} from 'lodash'

export const inProgressLessonStates = slice(lessonStates, 0, indexOf(lessonStates, 'published'))

export const lessonTopicsLessonStates = slice(lessonStates, 0, indexOf(lessonStates, 'submitted'))

export const publishedLessonStates = slice(lessonStates, indexOf(lessonStates, 'published'))
