import React from 'react'
import Card from 'components/Card'
import LessonListsByStates from 'components/LessonListsByStates'

export default ({instructor}) => (
  <Card title={`${instructor.first_name}'s lessons`}>
    <LessonListsByStates instructor={instructor} />
  </Card>
)
