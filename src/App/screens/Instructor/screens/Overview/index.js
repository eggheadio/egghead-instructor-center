import React from 'react'
import {slice, indexOf} from 'lodash'
import Split from '../../../../components/Split'
import lessonStates from '../../utils/lessonStates'
import InstructorLessonsCallback from '../../components/InstructorLessonsCallback'
import InProgress from './components/InProgress'
import Stats from './components/Stats'
import Help from './components/Help'

const inProgressLessonStates = slice(lessonStates, 0, indexOf(lessonStates, 'published'))

export default ({
  requestInstructorLessons,
  instructor,
  instructorLessons,
}) => (
  <InstructorLessonsCallback
    requestInstructorLessons={requestInstructorLessons}
    instructor={instructor}
    states={inProgressLessonStates}
  >
    {(currentPage) => (
      <Split
        title={instructor.first_name}
        main={
          <InProgress
            instructor={instructor}
            instructorLessons={instructorLessons}
          />
        }
        aside={
          <div>
            <Stats instructor={instructor} />
            <Help />
          </div>
        }
      />
    )}
  </InstructorLessonsCallback>
)
