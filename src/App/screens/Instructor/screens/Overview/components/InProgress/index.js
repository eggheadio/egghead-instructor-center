import React from 'react'
import {size} from 'lodash'
import PaginatedLessonList from '../../../../components/PaginatedLessonList'

export default ({
  instructor,
  instructorLessons,
  currentPage,
  fetchLessons,
  pageSize,
}) => (
  <div>

    <h3 className='f3'>
      In Progress
      <span className='ml2 black-30'>
        ({size(instructorLessons.lessons)})
      </span>
    </h3>

    <PaginatedLessonList
      lessons={instructorLessons.lessons}
      fetchLessons={fetchLessons}
      total={instructorLessons.total}
      currentPage={currentPage}
      pageSize={pageSize}
    />

  </div>
)

