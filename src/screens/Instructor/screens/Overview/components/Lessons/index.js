import React from 'react'
import {
  newLessonsActionText,
  lessonsTitleText,
  inProgressTitleText,
  noInProgressLessonsDescriptionText,
  noPublishedLessonsDescriptionText,
  getPublishedActionText,
} from '../../../../../../utils/text'
import Heading from '../../../../../../components/Heading'
import {inProgressLessonStates, publishedLessonStates} from '../../../../utils/lessonStatesGroups'
import Prompt from '../../../../components/Prompt'
import LessonList from '../../../../components/LessonList'
import Tabs from './components/Tabs'

export default ({instructor, lessonPage}) => (
  <div>

    {(instructor.published_lessons === 0)
      ? <div className='mb3 pa3 bg-light-gray br2'>
          <Prompt
            description={noPublishedLessonsDescriptionText}
            action={getPublishedActionText}
            route={'/get-published'}
          />
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
                  action={newLessonsActionText}
                  route={'/new-lessons'}
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
                <Prompt
                  description={noPublishedLessonsDescriptionText}
                  action={getPublishedActionText}
                  route={'/get-published'}
                />
              </div>
            }
          />
        ),
      },
    ]} />
  </div>
)
