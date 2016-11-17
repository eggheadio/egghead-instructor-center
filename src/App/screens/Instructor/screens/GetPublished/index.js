import React from 'react'
import Split from '../../../../components/Split'
import InstructorLessonsCallback from '../../components/InstructorLessonsCallback'
import GetPublishedSteps from './components/GetPublishedSteps'
import GetPublishedFaq from './components/GetPublishedFaq'

export default ({
  instructor,
  instructorLessons,
}) => (
  <InstructorLessonsCallback instructor={instructor}>
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
  </InstructorLessonsCallback>
)
