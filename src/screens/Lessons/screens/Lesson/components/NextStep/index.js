import React from 'react'
import {statusTitleText} from 'utils/text'
import {statusByLessonState} from 'utils/lessonStates'
import Heading from 'components/Heading'

export default ({lesson}) => statusByLessonState[lesson.state]
  ?  <div>

        <Heading level='3'>
          {statusTitleText}
        </Heading>
        <div className={`
          mb2 ttu tc pa2 br2 ba
          ${statusByLessonState[lesson.state].requiresUserAction ? 'orange b--orange' : 'b--black-50'}
        `}>
          {lesson.state}
        </div>
        <div>
          {statusByLessonState[lesson.state].description}
        </div>

      </div>
  : null
