import React from 'react'
import Split from '../../../../components/Split'
import {unclaimedTopicsLessonStates} from '../../utils/lessonStatesGroups'
import LessonsByPage from '../../components/LessonsByPage'
import Requested from './components/Requested'
import Submit from './components/Submit'

export default ({
  instructor,
  lessonPage,
}) => (
  <LessonsByPage states={unclaimedTopicsLessonStates}>
    {({currentPage, fetchLessons, pageSize}) => (
      <Split
        title='Topics'
        main={
          <Requested
            instructor={instructor}
            lessonPage={lessonPage}
            currentPage={currentPage}
            fetchLessons={fetchLessons}
            pageSize={pageSize}
          />
        }
        aside={
          <Submit instructor={instructor} />
        }
      />
    )}
  </LessonsByPage>
)
