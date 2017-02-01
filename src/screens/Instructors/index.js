import React from 'react'
import {filter, reject} from 'lodash'
import {instructorPulseTitleText, unpublishedTitleText, publishedTitleText} from 'utils/text'
import Request from 'components/Request'
import Split from 'components/Split'
import InstructorsList from './components/InstructorsList'

export default () => (
  <Request url='/api/v1/instructors'>
    {({data}) => (
      <Split
        title={instructorPulseTitleText}
        main={
          <InstructorsList
            title={unpublishedTitleText}
            instructors={filter(data, ['published_lessons', 0])}
          />
        }
        aside={
          <InstructorsList
            title={publishedTitleText}
            instructors={reject(data, ['published_lessons', 0])}
          />
        }
      />
    )}
  </Request>
)
