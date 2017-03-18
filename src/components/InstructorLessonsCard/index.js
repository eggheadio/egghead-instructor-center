import React from 'react'
import Card from 'components/Card'
import LessonGroups from 'components/LessonGroups'

export default ({instructor}) => (
  <Card title={`${instructor.first_name}'s lessons`}>
    <LessonGroups instructor={instructor} />
  </Card>
)
