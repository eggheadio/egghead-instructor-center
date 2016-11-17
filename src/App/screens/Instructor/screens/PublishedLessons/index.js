import React from 'react'
import Split from '../../../../components/Split'
import InstructorLessons from '../../components/InstructorLessons'
import PaginatedLessonList from './components/PaginatedLessonList'

export default ({
  instructor,
  instructorLessons,
}) => (
  <InstructorLessons instructor={instructor}>
    {(currentPage, fetchLessons) => (
      <Split
        title='Published Lessons'
        main={
          <PaginatedLessonList
            lessons={instructorLessons.lessons}
            fetchLessons={fetchLessons}
            instructor={instructor}
            total={instructorLessons.total}
            currentPage={currentPage}
          />
        }
        aside={
          <div />
        }
      />
    )}
  </InstructorLessons>
)
