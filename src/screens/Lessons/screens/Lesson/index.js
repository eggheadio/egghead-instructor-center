import React from 'react'
import LessonDetails from './components/LessonDetails'

export default ({instructor, lesson, requestLesson}) => (
  <div>
    <LessonDetails
      lesson={lesson}
      requestLesson={requestLesson}
    />
  </div>
)
