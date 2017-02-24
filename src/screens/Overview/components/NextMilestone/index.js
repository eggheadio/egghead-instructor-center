import React from 'react'
import createLessonsUrl from 'utils/createLessonsUrl'
import InstructorCenterRequest from 'components/InstructorCenterRequest'
import GetPublished from './components/GetPublished'

export default ({instructor}) => (
  instructor.published_lessons === 0
    ? <InstructorCenterRequest 
        url={createLessonsUrl({
          lessons_url: instructor.lessons_url
        })}
      >
        {({data}) => (
          <GetPublished
            instructor={instructor} 
            firstPageOfLessons={data}
          />
        )}
      </InstructorCenterRequest>
    : null
)
