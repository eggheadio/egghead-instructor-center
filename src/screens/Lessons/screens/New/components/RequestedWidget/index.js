import React from 'react'
import {Paragraph} from 'egghead-ui'
import {
  requestedTitleText,
  requestedDescriptionText,
  requestedEmptyDescriptionText,
} from 'utils/text'
import Widget from 'components/Widget'
import LessonList from 'components/LessonList'

export default () => (
  <Widget 
    title={requestedTitleText}
    description={requestedDescriptionText}
  >
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
  </Widget>
)
