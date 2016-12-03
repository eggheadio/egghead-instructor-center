import React from 'react'
import Heading from '../../../../../../../../components/Heading'
import {publishedLessonStates} from '../../../../../../utils/lessonStatesGroups'
import LessonsByPage from '../../../../../../components/LessonsByPage'
import PaginatedLessonList from '../../../../../../components/PaginatedLessonList'

export default ({
  instructor,
  lessonPage,
}) => (
  <div>

    <Heading level='3'>
      Published
    </Heading>

    <LessonsByPage
      instructor={instructor}
      states={publishedLessonStates}
    >
      {({currentPage, fetchLessons, pageSize}) => (
        <PaginatedLessonList
          lessons={lessonPage.lessons}
          fetchLessons={fetchLessons}
          total={lessonPage.total}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      )}
    </LessonsByPage>
  </div>
)
