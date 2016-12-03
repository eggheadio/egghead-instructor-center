import React from 'react'
import {publishedLessonStates} from '../../../../../../utils/lessonStatesGroups'
import LessonList from '../../../../../../components/LessonList'

export default () => (
  <LessonList
    states={publishedLessonStates}
    isOwnedByInstructor
  />
)
