import React from 'react'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import LessonGroups from 'components/LessonGroups'

export default () => (
  <TitleCard title={<Text message='lessonGroups.allTitle' />}>
    <LessonGroups />
  </TitleCard>
)
