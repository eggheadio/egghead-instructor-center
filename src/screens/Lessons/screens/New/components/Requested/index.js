import React from 'react'

import {
  requestedTitleText,
  requestedDescriptionText,
  requestedEmptyDescriptionText,
} from 'utils/text'
import {requestedLessonStates} from 'utils/lessonStatesGroups'

import Heading from 'components/Heading'
import LessonList from 'components/LessonList'

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
