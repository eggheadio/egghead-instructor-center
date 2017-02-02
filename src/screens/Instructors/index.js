import React from 'react'
import {filter, reject} from 'lodash'
import {instructorPulseTitleText, unpublishedTitleText, publishedTitleText} from 'utils/text'
import Split from 'components/Split'
import InstructorsList from './components/InstructorsList'

export default ({instructors}) => (
  <Split
    title={instructorPulseTitleText}
    main={
      <InstructorsList
        title={unpublishedTitleText}
        instructors={filter(instructors, ['published_lessons', 0])}
      />
    }
    aside={
      <InstructorsList
        title={publishedTitleText}
        instructors={reject(instructors, ['published_lessons', 0])}
      />
    }
  />
)
