import React from 'react'
import {connect} from 'react-redux'
import LessonsByPage from '../LessonsByPage'
import PaginatedLessonList from './components/PaginatedLessonList'

const LessonList = ({
  instructor,
  lessonPage,
  states,
  fallback,
}) => (
  <LessonsByPage
    instructor={instructor || false}
    states={states}
  >
    {({currentPage, fetchLessons, pageSize}) => (
      <PaginatedLessonList
        lessons={lessonPage.lessons}
        fetchLessons={fetchLessons}
        total={lessonPage.total}
        currentPage={currentPage}
        pageSize={pageSize}
        fallback={fallback}
      />
    )}
  </LessonsByPage>
)

export default connect(
  ({appScreen}) => ({
    lessonPage: appScreen.lessonPage,
  }),
  null,
)(LessonList)
