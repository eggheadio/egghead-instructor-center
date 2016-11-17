import React from 'react'
import Split from '../../../../components/Split'
import InstructorLessons from '../../components/InstructorLessons'
import GetPublishedSteps from './components/GetPublishedSteps'
import GetPublishedFaq from './components/GetPublishedFaq'

export default ({
  instructor,
  instructorLessons,
}) => (
  <InstructorLessons instructor={instructor}>
    {(currentPage) => (
      <Split
        title='Get Published'
        main={
          <GetPublishedSteps
            instructor={instructor}
            instructorLessons={instructorLessons}
          />
        }
        aside={
          <GetPublishedFaq />
        }
      />
    )}
  </InstructorLessons>
)
