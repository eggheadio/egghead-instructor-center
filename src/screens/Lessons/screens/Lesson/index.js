import React from 'react'
import LessonCard from './components/LessonCard'

export default ({instructor, lesson}) => (
  <div>
    <LessonCard
      instructor={instructor}
      lesson={lesson}
    />
  </div>
)
