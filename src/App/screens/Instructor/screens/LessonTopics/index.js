import React from 'react'
import Split from '../../../../components/Split'
import {unclaimedLessonTopicsLessonStates} from '../../utils/lessonStatesGroups'
import LessonsByPage from '../../components/LessonsByPage'
import Unclaimed from './components/Unclaimed'

export default ({
  instructor,
  allLessons,
}) => (
  <LessonsByPage states={unclaimedLessonTopicsLessonStates}>
    {({currentPage, fetchLessons, pageSize}) => (
      <Split
        title='Lesson Topics'
        main={
          <Unclaimed
            instructor={instructor}
            allLessons={allLessons}
            currentPage={currentPage}
            fetchLessons={fetchLessons}
            pageSize={pageSize}
          />
        }
        aside={
          <div>Submit</div>
        }
      />
    )}
  </LessonsByPage>
)
