import React from 'react'
import {inProgressLessonStates} from '../../../../../../utils/lessonStatesGroups'
import LessonList from '../../../../../../components/LessonList'

export default () => (
  <LessonList
    states={inProgressLessonStates}
    isOwnedByInstructor
  />
)
