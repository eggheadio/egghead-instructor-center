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
      Requested
    </Heading>

    <div className='mb3'>
      Here's what we'd love to see recorded right now. Claimed topics will be yours for 2 weeks, and then they'll be reopened for others to claim.
    </div>

    <PaginatedLessonList
      lessons={lessonPage.lessons}
      fetchLessons={fetchLessons}
      total={lessonPage.total}
      currentPage={currentPage}
      pageSize={pageSize}
    />

  </div>
)
