import React from 'react'
import {slice, indexOf} from 'lodash'
import Split from '../../../../components/Split'
import lessonStates from '../../utils/lessonStates'
import LessonsByPage from '../../components/LessonsByPage'
import Unclaimed from './components/Unclaimed'

const lessonTopicsLessonStates = slice(lessonStates, 0, indexOf(lessonStates, 'submitted'))

export default ({
  instructor,
  allLessons,
}) => (
  <LessonsByPage states={lessonTopicsLessonStates}>
    {(currentPage, fetchLessons, pageSize) => (
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
