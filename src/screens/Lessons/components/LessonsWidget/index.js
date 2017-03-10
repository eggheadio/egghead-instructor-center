import React from 'react'
import {lessonsTitleText} from 'utils/text'
import Widget from 'components/Widget'
import LessonListsByStates from 'components/LessonListsByStates'

export default () => (
  <Widget title={lessonsTitleText}>
    <LessonListsByStates />
  </Widget>
)
