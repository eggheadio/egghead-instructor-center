import React from 'react'
import {getPublishedTitleText, getPublishedDescriptionText} from 'utils/text'
import createLessonsUrl from 'utils/createLessonsUrl'
import WrappedRequest from 'components/WrappedRequest'
import Widget from 'components/Widget'
import GetPublished from './components/GetPublished'

export default ({instructor}) => (
  instructor.published_lessons === 0
    ? <WrappedRequest 
        url={createLessonsUrl({
          lessons_url: instructor.lessons_url
        })}
      >
        {({data}) => (
          <Widget
            title={getPublishedTitleText}
            description={getPublishedDescriptionText}
          >
            <GetPublished
              instructor={instructor} 
              firstPageOfLessons={data}
            />
          </Widget>
        )}
      </WrappedRequest>
    : null
)
