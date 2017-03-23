import React from 'react'
import {map} from 'lodash'
import {List} from 'egghead-ui'
import {statsTitleText} from 'utils/text'
import TitleCard from 'components/TitleCard'
import IconLabel from 'components/IconLabel'

export default ({publishedLessons, publishedCourses}) => {

  if(!publishedLessons) {
    return null
  }

  const items = [
    {
      type: 'lesson',
      text: `${publishedLessons} published lessons`,
      color: 'green',
    },
    {
      type: 'course',
      text: `${publishedCourses} published courses`,
      color: 'orange',
    },
  ]

  return (
    <TitleCard title={statsTitleText}>
      <List items={map(items, (item, index) => (
        <IconLabel
          iconType={item.type}
          labelText={item.text}
          color={item.color}
        />
      ))} />
    </TitleCard>
  )
}
