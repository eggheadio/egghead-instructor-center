import React from 'react'
import PaginatedLessonList from '../../../../components/PaginatedLessonList'

export default ({
  instructor,
  allLessons,
  currentPage,
  fetchLessons,
  pageSize,
}) => (
  <div>

    <h3 className='f3'>
      Requested
    </h3>

    <div className='mb3'>
      Here's what we'd love to see recorded right now. Claimed topics will be yours for 2 weeks, and then they'll be reopened for others to claim.
    </div>

    <PaginatedLessonList
      lessons={allLessons.lessons}
      fetchLessons={fetchLessons}
      total={allLessons.total}
      currentPage={currentPage}
      pageSize={pageSize}
    />

  </div>
)
