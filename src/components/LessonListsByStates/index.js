import React from 'react'
import {
  newLessonsActionText,
  inProgressTitleText,
  publishedTitleText,
  noInProgressLessonsDescriptionText,
  noPublishedLessonsDescriptionText,
} from 'utils/text'
import {inProgressLessonStates, publishedLessonStates} from 'utils/lessonStates'
import LessonList from 'components/LessonList'
import Tabs from 'components/Tabs'
import Prompt from 'components/Prompt'

export default ({instructor}) => (
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
      title: publishedTitleText,
      component: (
        <LessonList
          states={publishedLessonStates}
          fallback={
            <div className='pa3'>
              <Prompt
                description={noPublishedLessonsDescriptionText}
                actionText={newLessonsActionText}
                action={'/lessons/new'}
              />
            </div>
          }
          instructor={instructor}
        />
      ),
    },
  ]} />
)
