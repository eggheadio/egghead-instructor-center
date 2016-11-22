import React from 'react'
import Heading from '../../../../../../components/Heading'
import PaginatedLessonList from '../../../../components/PaginatedLessonList'

export default ({
  instructor,
  instructorLessons,
  currentPage,
  fetchLessons,
  pageSize,
}) => (
  <div>

    <Heading level='2'>
      In Progress
    </Heading>

    <PaginatedLessonList
      lessons={instructorLessons.lessons}
      fetchLessons={fetchLessons}
      total={instructorLessons.total}
      currentPage={currentPage}
      pageSize={pageSize}
    />

  </div>
)

