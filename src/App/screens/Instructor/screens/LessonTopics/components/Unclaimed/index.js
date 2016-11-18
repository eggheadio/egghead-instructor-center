import React from 'react'
import PaginatedLessonList from '../../../../components/PaginatedLessonList'

export default ({
  instructor,
  allLessons,
  currentPage,
  fetchLessons,
  pageSize,
}) => (
  <PaginatedLessonList
    lessons={allLessons.lessons}
    fetchLessons={fetchLessons}
    total={allLessons.total}
    currentPage={currentPage}
    pageSize={pageSize}
  />
)
