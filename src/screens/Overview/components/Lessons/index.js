import React from 'react'
import {
  newLessonsActionText,
  lessonsTitleText,
  inProgressTitleText,
  noInProgressLessonsDescriptionText,
  noPublishedLessonsDescriptionText,
} from 'utils/text'
import {inProgressLessonStates, publishedLessonStates} from 'utils/lessonStates'
import Heading from 'components/Heading'
import LessonList from 'components/LessonList'
import Prompt from './components/Prompt'
import Tabs from './components/Tabs'

export default ({instructor, lessonPage}) => (
  <div>

    {(instructor.published_lessons === 0)
      ? <div className='mb3 pa3 bg-light-gray br2'>
          <Prompt description={noPublishedLessonsDescriptionText} />
        </div>
      : null
    }
    
    <Heading level='2'>
      {lessonsTitleText}
    </Heading>

    <Tabs groups={[
      {
        title: inProgressTitleText,
        component: (
          <LessonList
            states={inProgressLessonStates}
            isOwnedByInstructor
            fallback={
              <div className='mt3'>
                <Prompt
                  description={noInProgressLessonsDescriptionText}
                  actionText={newLessonsActionText}
                  action={'/lessons/new'}
                />
              </div>
            }
          />
        ),
      },
      {
        title: 'Published',
        component: (
          <LessonList
            states={publishedLessonStates}
            isOwnedByInstructor
            fallback={
              <div className='mt3'>
                <Prompt description={noPublishedLessonsDescriptionText} />
              </div>
            }
          />
        ),
      },
    ]} />
  </div>
)
