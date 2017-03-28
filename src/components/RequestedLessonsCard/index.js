import React from 'react'
import {Paragraph} from 'egghead-ui'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import LessonList from 'components/LessonList'
import ProposeLesson from './components/ProposeLesson'

export default ({instructor}) => (
  <TitleCard 
    title={<Text message='requestedLessons.title' />}
    description={<Text message='requestedLessons.description' />}
  >
    <div className='bb b--gray-secondary pa4'>
      <ProposeLesson instructor={instructor} />
    </div>
    <LessonList
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
