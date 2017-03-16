import React from 'react'
import LessonStateProgression from './components/LessonStateProgression'
import LessonEdit from './components/LessonEdit'

export default ({lesson, requestLesson, requestCurrentPage}) => (
  <div>
    <LessonEdit lesson={lesson} />
    <LessonStateProgression 
      lesson={lesson} 
      onLessonStateChange={requestLesson || requestCurrentPage}
    />
  </div>
)
