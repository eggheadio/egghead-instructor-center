import React from 'react'
import createLessonsUrl from 'utils/createLessonsUrl'
import WrappedRequest from 'components/WrappedRequest'
import GetPublished from './components/GetPublished'

export default ({instructor}) => (
  instructor.published_lessons === 0
    ? <WrappedRequest 
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
      </WrappedRequest>
    : null
)
