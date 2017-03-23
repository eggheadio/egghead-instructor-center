import React from 'react'
import TitleCard from 'components/TitleCard'
import LessonGroups from 'components/LessonGroups'

export default ({instructor}) => (
  <TitleCard title={`${instructor.first_name}'s lessons`}>
    <LessonGroups instructor={instructor} />
  </TitleCard>
)
