import React from 'react'
import {detailsByLessonState} from 'utils/lessonStates'

export default ({lesson}) => {
  const statusColor = detailsByLessonState[lesson.state].color
  return (
    <div>
      <div className={`
        mb3 ttu tc pv2 ph3 br2 ba b--dashed dib
        ${statusColor} b--${statusColor}
      `}>
        {lesson.state}
      </div>
      <div className="white-50">
        {detailsByLessonState[lesson.state].description}
      </div>
    </div>
  )
}
