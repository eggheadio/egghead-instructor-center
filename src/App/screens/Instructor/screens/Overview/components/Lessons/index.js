import React from 'react'
import {
  lessonsTitleText,
  inProgressTitleText,
  noInProgressLessonsDescriptionText,
  noPublishedLessonsDescriptionText,
} from '../../../../../../utils/text'
import Heading from '../../../../../../components/Heading'
import {inProgressLessonStates, publishedLessonStates} from '../../../../utils/lessonStatesGroups'
import LessonList from '../../../../components/LessonList'
import Tabs from './components/Tabs'
import NoLessonsClaimFallback from './components/NoLessonsClaimFallback'

export default ({instructor, lessonPage}) => (
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
            isOwnedByInstructor
            fallback={
              <NoLessonsClaimFallback 
                instructorId={instructor.id}
                description={noInProgressLessonsDescriptionText}
              />
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
              <NoLessonsClaimFallback 
                instructorId={instructor.id}
                description={noPublishedLessonsDescriptionText}
              />
            }
          />
        ),
      },
    ]} />
  </div>
)
