import React from 'react'
import {statusByLessonState} from 'utils/lessonStates'

export default function LessonStatus({lesson}) {
  return (
    <div>
      <div className={`
        mb3 ttu tc pv2 ph3 br2 ba b--dashed dib
        ${statusByLessonState[lesson.state].requiresUserAction ? 'blue b--blue' : 'yellow b--yellow'}
      `}>
        {lesson.state}
      </div>
      <div className="white-50">
        {statusByLessonState[lesson.state].description}
      </div>
    </div>
  )
}