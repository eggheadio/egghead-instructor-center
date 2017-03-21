import React from 'react'
import {map} from 'lodash'
import {statsTitleText} from 'utils/text'
import TitleCard from 'components/TitleCard'
import List from 'components/List'
import IconLabel from 'components/IconLabel'

export default ({publishedLessons, publishedCourses}) => {

  if(!publishedLessons) {
    return null
  }

  const items = [
    {
      type: 'lesson',
      text: `${publishedLessons} published lessons`,
    },
    {
      type: 'course',
      text: `${publishedCourses} published courses`,
    },
  ]

  return (
    <TitleCard title={statsTitleText}>
      <List items={map(items, (item, index) => (
        <IconLabel
          iconType={item.type}
          labelText={item.text}
        />
      ))} />
    </TitleCard>
  )
}
