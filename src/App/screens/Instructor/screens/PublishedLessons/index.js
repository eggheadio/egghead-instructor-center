import React from 'react'
import Split from '../../../../components/Split'
import {publishedLessonStates} from '../../utils/lessonStatesGroups'
import LessonsByPage from '../../components/LessonsByPage'
import PaginatedLessonList from '../../components/PaginatedLessonList'

export default ({
  instructor,
  instructorLessons,
}) => (
  <LessonsByPage
    instructor={instructor}
    states={publishedLessonStates}
  >
    {({currentPage, fetchLessons, pageSize}) => (
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
  </LessonsByPage>
)
