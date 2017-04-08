import React from 'react'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import LessonOverviewsByGroup from 'components/LessonOverviewsByGroup'

export default () => (
  <TitleCard title={<Text message='lessonOverviewsByGroup.allTitle' />}>
    <LessonOverviewsByGroup />
  </TitleCard>
)
