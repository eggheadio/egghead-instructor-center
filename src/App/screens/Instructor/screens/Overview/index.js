import React from 'react'
import Split from '../../../../components/Split'
import {inProgressLessonStates} from '../../utils/lessonStatesGroups'
import LessonsByPage from '../../components/LessonsByPage'
import InProgress from './components/InProgress'
import Stats from './components/Stats'
import Help from './components/Help'

export default ({
  instructor,
  lessonPage,
}) => (
  <LessonsByPage
    instructor={instructor}
    states={inProgressLessonStates}
  >
    {({currentPage, fetchLessons, pageSize}) => (
      <Split
        title={instructor.first_name}
        main={
          <InProgress
            instructor={instructor}
            lessonPage={lessonPage}
            currentPage={currentPage}
            fetchLessons={fetchLessons}
            pageSize={pageSize}
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
