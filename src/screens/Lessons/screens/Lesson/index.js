import React from 'react'
import LessonWidget from './components/LessonWidget'

export default ({instructor, lesson}) => (
  <div>
    <LessonWidget
      instructor={instructor}
      lesson={lesson}
    />
  </div>
)
