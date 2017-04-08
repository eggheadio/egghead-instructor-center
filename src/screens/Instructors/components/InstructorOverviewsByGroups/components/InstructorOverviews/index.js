import React from 'react'
import {map, size} from 'lodash'
import {Paragraph, List} from 'egghead-ui'
import {Text} from 'react-localize'
import InstructorOverview from './components/InstructorOverview'

export default ({title, instructors}) => size(instructors) > 0
  ? <List items={map(instructors, (instructor, index) => (
      <InstructorOverview
        key={index}
        instructor={instructor} 
      />
    ))} />
  : <Paragraph>
      <Text message='instructorOverviewsByGroup.fallback' />
    </Paragraph>
