import React from 'react'
import {slice, indexOf} from 'lodash'
import Split from '../../../../components/Split'
import lessonStates from '../../utils/lessonStates'
import LessonsByPage from '../../components/LessonsByPage'
import InProgress from './components/InProgress'
import Stats from './components/Stats'
import Help from './components/Help'

const inProgressLessonStates = slice(lessonStates, 0, indexOf(lessonStates, 'published'))
const inProgressPageSize = 50

export default ({
  instructor,
  instructorLessons,
}) => (
  <LessonsByPage
    instructor={instructor}
    states={inProgressLessonStates}
    pageSize={inProgressPageSize}
  >
    {({currentPage}) => (
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
  </LessonsByPage>
)
