import React from 'react'
import {map} from 'lodash'
import {List} from 'egghead-ui'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import IconLabel from 'components/IconLabel'

export default ({publishedLessons, publishedCourses}) => {

  if(!publishedLessons) {
    return null
  }

  const items = [
    {
      type: 'lesson',
      text: <Text 
        message='instructorStats.lessons'
        values={[publishedLessons]} 
      />,
      color: 'green',
    },
    {
      type: 'course',
      text: <Text 
        message='instructorStats.courses'
        values={[publishedCourses]} 
      />,
      color: 'orange',
    },
  ]

  return (
    <TitleCard title={<Text message='instructorStats.title' />}>
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
