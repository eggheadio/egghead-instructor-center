import React from 'react'
import {map} from 'lodash'
import {List} from 'egghead-ui'
import {Text} from 'react-localize'
import pluralize from 'pluralize'
import TitleCard from 'components/TitleCard'
import IconLabel from 'components/IconLabel'

export default ({publishedLessons, publishedCourses}) => {

  if(!publishedLessons) {
    return null
  }

  const items = [
    {
      type: 'lesson',
      text: (
        <span>
          <Text 
            message='instructorStats.lessons'
            values={[publishedLessons]} 
          />
          <span>{` ${pluralize('lesson', publishedLessons)}`}</span>
        </span>
      ),
      color: 'green',
    },
    {
      type: 'course',
      text: (
        <span>
          <Text 
            message='instructorStats.courses'
            values={[publishedCourses]} 
          />
          <span>{` ${pluralize('course', publishedCourses)}`}</span>
        </span>
      ),
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
