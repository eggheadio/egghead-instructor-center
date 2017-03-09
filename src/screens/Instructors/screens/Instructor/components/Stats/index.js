import React from 'react'
import {map} from 'lodash'
import {statsTitleText} from 'utils/text'
import Widget from 'components/Widget'
import List from 'components/List'
import IconLabel from 'components/IconLabel'

export default ({instructor}) => {
  
  const {published_courses, published_lessons} = instructor

  if(published_lessons === 0) {
    return null
  }

  const items = [
    {
      type: 'course',
      text: `${published_courses} published courses`,
    },
    {
      type: 'lesson',
      text: `${published_lessons} published lessons`,
    },
  ]

  return (
    <Widget title={statsTitleText}>
      <List items={map(items, (item, index) => (
        <IconLabel
          iconType={item.type}
          labelText={item.text}
        />
      ))} />
    </Widget>
  )
}
