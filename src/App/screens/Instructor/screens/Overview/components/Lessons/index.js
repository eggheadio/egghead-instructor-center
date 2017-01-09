import React from 'react'
import Heading from '../../../../../../components/Heading'
import {inProgressLessonStates, publishedLessonStates} from '../../../../utils/lessonStatesGroups'
import LessonList from '../../../../components/LessonList'
import Tabs from './components/Tabs'
import NoLessonsClaimFallback from './components/NoLessonsClaimFallback'

export default ({instructor, lessonPage}) => (
  <div>
    
    <Heading level='2'>
      Lessons
    </Heading>

    <Tabs groups={[
      {
        title: 'In Progress',
        component: (
          <LessonList
            states={inProgressLessonStates}
            isOwnedByInstructor
            fallback={
              <NoLessonsClaimFallback 
                instructorId={instructor.id}
                description='You have no lessons in progress'
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
                description='You have no published lessons'
              />
            }
          />
        ),
      },
    ]} />
  </div>
)
