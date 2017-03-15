import React from 'react'
import {Paragraph} from 'egghead-ui'
import {
  requestedTitleText,
  requestedDescriptionText,
  requestedEmptyDescriptionText,
} from 'utils/text'
import Card from 'components/Card'
import LessonList from 'components/LessonList'

export default () => (
  <Card 
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
  </Card>
)
