import React from 'react'
import Heading from '../../../../../../components/Heading'
import PaginatedLessonList from '../../../../components/PaginatedLessonList'

export default ({
  instructor,
  lessonPage,
  currentPage,
  fetchLessons,
  pageSize,
}) => (
  <div>

    <Heading level='2'>
      In Progress
    </Heading>

    <PaginatedLessonList
      lessons={lessonPage.lessons}
      fetchLessons={fetchLessons}
      total={lessonPage.total}
      currentPage={currentPage}
      pageSize={pageSize}
    />

  </div>
)

