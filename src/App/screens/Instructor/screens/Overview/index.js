import React from 'react'
import Split from '../../../../components/Split'
import {inProgressLessonStates} from '../../utils/lessonStatesGroups'
import LessonsByPage from '../../components/LessonsByPage'
import InProgress from './components/InProgress'
import Stats from './components/Stats'
import Help from './components/Help'

const pageSize = 50

export default ({
  instructor,
  instructorLessons,
}) => (
  <LessonsByPage
    instructor={instructor}
    states={inProgressLessonStates}
    pageSize={pageSize}
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
