import React from 'react'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import LessonGroups from 'components/LessonGroups'

export default ({instructor}) => (
  <TitleCard title={<Text
    message='lessonGroups.instructorTitle'
    values={[instructor.first_name]}
  />}>
    <LessonGroups instructor={instructor} />
  </TitleCard>
)
