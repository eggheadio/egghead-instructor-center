import React from 'react'
import {Paragraph} from 'egghead-ui'
import {Text} from 'react-localize'
import TitleCard from 'components/TitleCard'
import LessonList from 'components/LessonList'

export default () => (
  <TitleCard 
    title={<Text message='requested.title' />}
    description={<Text message='requested.description' />}
  >
    <LessonList
      states={['requested']} 
      fallback={
        <div className='pa4'>
          <Paragraph>
            <Text message='requested.fallback' />
          </Paragraph>
        </div>
      }
    />
  </TitleCard>
)
