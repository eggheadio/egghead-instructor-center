import React from 'react'
import {lessonsTitleText} from 'utils/text'
import Card from 'components/Card'
import LessonGroups from 'components/LessonGroups'

export default () => (
  <Card title={lessonsTitleText}>
    <LessonGroups />
  </Card>
)
