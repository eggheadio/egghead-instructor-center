import React from 'react'
import {
  newLessonsActionText,
  inProgressTitleText,
  inReviewTitleText,
  inQueueTitleText,
  finishedTitleText,
  noInProgressLessonsDescriptionText,
  noInReviewLessonsDescriptionText,
  noInQueueLessonsDescriptionText,
  noFinishedLessonsDescriptionText,
} from 'utils/text'
import {
  inProgressLessonStates,
  inReviewLessonStates,
  inQueueLessonStates,
  finishedLessonStates,
} from 'utils/lessonStates'
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
            <div className='pa4'>
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
      title: inReviewTitleText,
      component: (
        <LessonList
          states={inReviewLessonStates}
          fallback={
            <div className='pa4'>
              <Prompt
                description={noInReviewLessonsDescriptionText}
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
      title: inQueueTitleText,
      component: (
        <LessonList
          states={inQueueLessonStates}
          fallback={
            <div className='pa4'>
              <Prompt
                description={noInQueueLessonsDescriptionText}
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
      title: finishedTitleText,
      component: (
        <LessonList
          states={finishedLessonStates}
          fallback={
            <div className='pa4'>
              <Prompt
                description={noFinishedLessonsDescriptionText}
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
