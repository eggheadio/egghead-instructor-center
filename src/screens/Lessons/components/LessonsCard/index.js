import React from 'react'
import {lessonsTitleText} from 'utils/text'
import Card from 'components/Card'
import LessonListsByStates from 'components/LessonListsByStates'

export default () => (
  <Card title={lessonsTitleText}>
    <LessonListsByStates />
  </Card>
)
