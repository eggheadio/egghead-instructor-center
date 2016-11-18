import React from 'react'
import Split from '../../../../components/Split'
import InstructorLessons from '../../components/InstructorLessons'
import PaginatedLessonList from '../../components/PaginatedLessonList'

export default ({
  instructor,
  instructorLessons,
}) => (
  <InstructorLessons instructor={instructor}>
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
