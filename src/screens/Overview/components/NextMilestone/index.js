import React from 'react'
import createLessonsUrl from 'utils/createLessonsUrl'
import Request from 'components/Request'
import GetPublished from './components/GetPublished'

export default ({instructor}) => (
  instructor.published_lessons === 0
    ? <Request 
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
      </Request>
    : null
)
