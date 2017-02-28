import React from 'react'
import {lessonsTitleText} from 'utils/text'
import Screen from 'components/Screen'
import LessonListsByStates from 'components/LessonListsByStates'

export default () => (
  <Screen
    title={lessonsTitleText}
    main={
      <LessonListsByStates />
    }
  />
)
