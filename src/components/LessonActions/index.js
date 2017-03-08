import React from 'react'
import LessonStateProgression from './components/LessonStateProgression'
import LessonEdit from './components/LessonEdit'

export default ({lesson}) => (
  <div>
    <LessonEdit lesson={lesson} />
    <LessonStateProgression lesson={lesson} />
  </div>
)
