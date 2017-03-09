import React from 'react'
import {Heading, Paragraph} from 'egghead-ui'
import {
  requestedTitleText,
  requestedDescriptionText,
  requestedEmptyDescriptionText,
} from 'utils/text'
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
      states={['requested']} 
      fallback={
        <div className='pa4'>
          <Paragraph>
            {requestedEmptyDescriptionText}
          </Paragraph>
        </div>
      }
    />

  </div>
)
