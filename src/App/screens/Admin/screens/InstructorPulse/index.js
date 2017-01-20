import React from 'react'
import {filter} from 'lodash'
import {instructorPulseTitleText, allTitleText, unpublishedTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'
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
        title={allTitleText}
        instructors={instructors}
      />
    }
  />
)
