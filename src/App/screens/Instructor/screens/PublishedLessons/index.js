import React from 'react'
import {slice, indexOf} from 'lodash'
import Split from '../../../../components/Split'
import lessonStates from '../../utils/lessonStates'
import InstructorLessons from '../../components/InstructorLessons'
import PaginatedLessonList from '../../components/PaginatedLessonList'

const publishedLessonStates = slice(lessonStates, indexOf(lessonStates, 'published'))
console.log('publishedLessonStates', publishedLessonStates)

export default ({
  instructor,
  instructorLessons,
}) => (
  <InstructorLessons
    instructor={instructor}
    states={publishedLessonStates}
  >
    {(currentPage, fetchLessons, pageSize) => (
      <Split
        title='Published Lessons'
        main={
          <PaginatedLessonList
            lessons={instructorLessons.lessons}
            fetchLessons={fetchLessons}
            total={instructorLessons.total}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        }
        aside={
          <div>Need something here</div>
        }
      />
    )}
  </InstructorLessons>
)
