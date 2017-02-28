import React from 'react'
import {Heading} from 'egghead-ui'
import {
  newLessonsActionText,
  lessonsTitleText,
  inProgressTitleText,
  noInProgressLessonsDescriptionText,
  noPublishedLessonsDescriptionText,
} from 'utils/text'
import {inProgressLessonStates, publishedLessonStates} from 'utils/lessonStates'
import LessonList from 'components/LessonList'
import Prompt from 'components/Prompt'
import Tabs from './components/Tabs'

export default ({instructor}) => (
  <div>

    <Heading level='2'>
      {lessonsTitleText}
    </Heading>

    <Tabs groups={[
      {
        title: inProgressTitleText,
        component: (
          <LessonList
            states={inProgressLessonStates}
            fallback={
              <div className='pa3'>
                <Prompt
                  description={noInProgressLessonsDescriptionText}
                  actionText={newLessonsActionText}
                  action={'/lessons/new'}
                />
              </div>
            }
            instructor={instructor}
          />
        ),
      },
      {
        title: 'Published',
        component: (
          <LessonList
            states={publishedLessonStates}
            fallback={
              <div className='pa3'>
                <Prompt description={noPublishedLessonsDescriptionText} />
              </div>
            }
            instructor={instructor}
          />
        ),
      },
    ]} />
  </div>
)
