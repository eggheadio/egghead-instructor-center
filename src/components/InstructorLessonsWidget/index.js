import React from 'react'
import Widget from 'components/Widget'
import LessonListsByStates from 'components/LessonListsByStates'

export default ({instructor}) => (
  <Widget title={`${instructor.first_name}'s lessons`}>
    <LessonListsByStates instructor={instructor} />
  </Widget>
)
