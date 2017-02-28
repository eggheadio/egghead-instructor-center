import React from 'react'
import {lessonsTitleText} from 'utils/text'
import Split from 'components/Split'
import LessonListsByStates from 'components/LessonListsByStates'

export default () => (
  <Split
    title={lessonsTitleText}
    main={
      <LessonListsByStates />
    }
  />
)
