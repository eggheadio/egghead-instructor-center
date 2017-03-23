import React from 'react'
import {lessonsTitleText} from 'utils/text'
import TitleCard from 'components/TitleCard'
import LessonGroups from 'components/LessonGroups'

export default () => (
  <TitleCard title={lessonsTitleText}>
    <LessonGroups />
  </TitleCard>
)
