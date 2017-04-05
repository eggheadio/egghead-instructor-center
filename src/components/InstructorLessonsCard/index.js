import React from 'react'
import {Text} from 'react-localize'
import {Maybe} from 'egghead-ui'
import TitleCard from 'components/TitleCard'
import LessonGroups from 'components/LessonGroups'

export default ({instructor}) => (
  <Maybe condition={Boolean(instructor)}>
    <TitleCard title={<Text
      message='lessonGroups.instructorTitle'
      values={[instructor.first_name]}
    />}>
      <LessonGroups instructor={instructor} />
    </TitleCard>
  </Maybe>
)
