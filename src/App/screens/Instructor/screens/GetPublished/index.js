import React from 'react'
import Split from '../../../../components/Split'
import LessonsByPage from '../../components/LessonsByPage'
import GetPublishedSteps from './components/GetPublishedSteps'
import GetPublishedFaq from './components/GetPublishedFaq'

export default ({
  instructor,
  instructorLessons,
}) => (
  <LessonsByPage instructor={instructor}>
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
  </LessonsByPage>
)
