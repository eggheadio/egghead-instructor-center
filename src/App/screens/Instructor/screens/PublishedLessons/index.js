import React from 'react'
import Split from '../../../../components/Split'
import InstructorLessonsCallback from '../../components/InstructorLessonsCallback'
import PaginatedLessonList from './components/PaginatedLessonList'

export default ({
  instructor,
  instructorLessons,
}) => (
  <InstructorLessonsCallback instructor={instructor}>
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
  </InstructorLessonsCallback>
)
