import React from 'react'
import {filter, reject} from 'lodash'
import {instructorPulseTitleText, unpublishedTitleText, publishedTitleText} from 'utils/text'
import Split from 'components/Split'
import sortBy from 'sort-by'

import InstructorsList from './components/InstructorsList'

export default ({instructors}) => (
  <Split
    title={instructorPulseTitleText}
    main={
      <InstructorsList
        title={unpublishedTitleText}
        instructors={filter(instructors, ['published_lessons', 0])
          .sort(sortBy('-submitted_lessons', '-claimed_lessons', '-approved_lessons', '-id'))}
      />
    }
    aside={
      <InstructorsList
        title={publishedTitleText}
        instructors={reject(instructors, ['published_lessons', 0])
          .sort(sortBy('-submitted_lessons', '-claimed_lessons', '-approved_lessons', 'published_lessons', '-id'))}
      />
    }
  />
)
