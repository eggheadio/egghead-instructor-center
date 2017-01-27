import React from 'react'
import {
  requestedTitleText,
  requestedDescriptionText,
  requestedEmptyDescriptionText,
} from 'utils/text'
import Heading from 'components/Heading'
import {requestedLessonStates} from 'screens/Instructor/utils/lessonStatesGroups'
import LessonList from 'screens/Instructor/components/LessonList'

export default () => (
  <div>

    <Heading level='2'>
      {requestedTitleText}
    </Heading>

    <div className='mb3'>
      {requestedDescriptionText}
    </div>

    <LessonList
      states={requestedLessonStates} 
      fallback={
        <div className='mv3 i gray'>
          {requestedEmptyDescriptionText}
        </div>
      }
    />

  </div>
)
