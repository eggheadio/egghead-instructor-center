import React from 'react'
import Heading from '../../../../../../components/Heading'
import {inProgressLessonStates, publishedLessonStates} from '../../../../utils/lessonStatesGroups'
import LessonList from '../../../../components/LessonList'
import Tabs from './components/Tabs'

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
          />
        ),
      },
      {
        title: 'Published',
        component: (
          <LessonList
            states={publishedLessonStates}
            isOwnedByInstructor
          />
        ),
      },
    ]} />
  </div>
)
