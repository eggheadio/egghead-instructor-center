import React from 'react'
import LessonCard from './components/LessonCard'

export default ({instructor, lesson, requestLesson}) => (
  <div>
    <LessonCard
      lesson={lesson}
      requestLesson={requestLesson}
    />
  </div>
)
