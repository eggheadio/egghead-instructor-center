import React from 'react'
import LessonEdit from './components/LessonEdit'
import LessonStateProgression from './components/LessonStateProgression'

export default ({lesson, requestLesson, requestCurrentPage}) => (
  <div>
    <LessonEdit lesson={lesson} />
    <LessonStateProgression 
      lesson={lesson} 
      onLessonStateChange={requestLesson || requestCurrentPage}
    />
  </div>
)
