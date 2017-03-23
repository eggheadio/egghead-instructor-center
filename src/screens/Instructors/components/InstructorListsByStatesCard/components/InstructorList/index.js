import React from 'react'
import {map, size} from 'lodash'
import {Paragraph, List} from 'egghead-ui'
import {noInstructorsDescriptionText} from 'utils/text'
import InstructorListItem from './components/InstructorListItem'

export default ({title, instructors}) => size(instructors) > 0
  ? <List items={map(instructors, (instructor, index) => (
      <InstructorListItem
        key={index}
        instructor={instructor} 
      />
    ))} />
  : <Paragraph>
      {noInstructorsDescriptionText}
    </Paragraph>
