import React from 'react'
import {Text} from 'react-localize'
import {Maybe} from 'egghead-ui'
import TitleCard from 'components/TitleCard'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'

export default ({instructor}) => (
  <Maybe condition={Boolean(instructor)}>
    <TitleCard title={<Text
      message='lessonOverviewsByGroup.instructorTitle'
      values={[instructor.first_name]}
    />}>
      <LessonOverviewsByGroup instructor={instructor} />
    </TitleCard>
  </Maybe>
)
