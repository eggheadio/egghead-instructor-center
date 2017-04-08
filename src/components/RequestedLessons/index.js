import React from 'react'
import {Paragraph} from 'egghead-ui'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import LessonOverviews from 'components/LessonOverviews'
import ProposeLesson from './components/ProposeLesson'

export default ({instructor}) => (
  <TitleCard 
    title={<Text message='requestedLessons.title' />}
    description={<Text message='requestedLessons.description' />}
  >
    <div className='bb b--gray-secondary pa4'>
      <ProposeLesson instructor={instructor} />
    </div>
    <LessonOverviews
      states={['requested']} 
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
