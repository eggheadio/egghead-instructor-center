import React from 'react'
import {map, keys} from 'lodash'
import {Button, Heading} from 'egghead-ui'
import {statusTitleText} from 'utils/text'
import {statusByLessonState, actionByLessonState} from 'utils/lessonStates'
import InstructorCenterRequest from 'components/InstructorCenterRequest'

export default ({lesson}) => (
  <div>

      <Heading level='3'>
        {statusTitleText}
      </Heading>
      <div className={`
        mb3 ttu tc pv2 ph3 br2 ba b--dashed dib
        ${statusByLessonState[lesson.state].requiresUserAction ? 'blue b--blue' : 'yellow b--yellow'}
      `}>
        {lesson.state}
      </div>
      <div>
        {statusByLessonState[lesson.state].description}
      </div>

      <div className='flex flex-wrap mt3'>
        {map(keys(actionByLessonState), (state, index) => {
          const stateUrl = lesson[`${state}_url`]
          return stateUrl
            ? <InstructorCenterRequest
                key={index}
                lazy
                method='post'
                url={stateUrl}
              >
                {({request}) => (
                  <div className='pa1'>
                    <Button
                      size='small'
                      onClick={() => request()}
                    >
                      {actionByLessonState[state].title}
                    </Button>
                  </div>
                )}
              </InstructorCenterRequest>
            : null
        })}
      </div>
  </div>
)
