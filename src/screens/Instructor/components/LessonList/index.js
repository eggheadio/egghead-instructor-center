import React from 'react'
import {connect} from 'react-redux'
import LessonsByPage from '../LessonsByPage'
import PaginatedLessonList from './components/PaginatedLessonList'

const LessonList = ({
  instructor,
  lessonPage,
  states,
  isOwnedByInstructor = false,
  fallback,
}) => (
  <LessonsByPage
    instructor={isOwnedByInstructor ? instructor : false}
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
  ({instructorScreen}) => ({
    instructor: instructorScreen.instructor,
    lessonPage: instructorScreen.lessonPage,
  }),
  null,
)(LessonList)
