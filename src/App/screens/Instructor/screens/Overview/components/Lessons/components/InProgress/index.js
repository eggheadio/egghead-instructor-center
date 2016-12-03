import React from 'react'
import Heading from '../../../../../../../../components/Heading'
import {inProgressLessonStates} from '../../../../../../utils/lessonStatesGroups'
import LessonsByPage from '../../../../../../components/LessonsByPage'
import PaginatedLessonList from '../../../../../../components/PaginatedLessonList'

export default ({
  instructor,
  lessonPage,
}) => (
  <div>

    <Heading level='3'>
      In Progress
    </Heading>

    <LessonsByPage
      instructor={instructor}
      states={inProgressLessonStates}
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

