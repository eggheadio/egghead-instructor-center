import React from 'react'
import {Paragraph} from 'egghead-ui'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import LessonList from 'components/LessonList'

export default () => (
  <TitleCard 
    title={<Text message='requestedLessons.title' />}
    description={<Text message='requestedLessons.description' />}
  >
    <LessonList
      states={['requestedLessons']} 
      fallback={
        <div className='pa4'>
          <Paragraph>
            <Text message='requestedLessons.fallback' />
          </Paragraph>
        </div>
      }
    />
  </TitleCard>
)
