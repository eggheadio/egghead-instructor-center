import React from 'react'
import {instructorPulseTitleText, allTitleText, unpublishedTitleText} from '../../../../utils/text'
import Split from '../../../../components/Split'
import InstructorsList from './components/InstructorsList'

export default ({instructors}) => (
  <Split
    title={instructorPulseTitleText}
    main={
      <InstructorsList
        title={unpublishedTitleText}
        instructors={[]}
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
