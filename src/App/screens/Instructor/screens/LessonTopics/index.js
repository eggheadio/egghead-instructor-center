import React from 'react'
import {slice, indexOf} from 'lodash'
import Split from '../../../../components/Split'
import lessonStates from '../../utils/lessonStates'
import AllLessons from '../../components/AllLessons'

const lessonTopicsLessonStates = slice(lessonStates, 0, indexOf(lessonStates, 'submitted'))

export default ({
  instructor,
  allLessons,
}) => (
  <AllLessons states={lessonTopicsLessonStates}>
    {(currentPage) => (
      <Split
        title='Lesson Topics'
        main={
          <div />
        }
        aside={
          <div />
        }
      />
    )}
  </AllLessons>
)
