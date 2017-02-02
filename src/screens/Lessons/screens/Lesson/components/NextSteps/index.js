import React from 'react'
import {map, keys} from 'lodash'
import {statusTitleText} from 'utils/text'
import {statusByLessonState, actionByLessonState} from 'utils/lessonStates'
import Request from 'components/Request'
import Button from 'components/Button'
import Heading from 'components/Heading'

export default ({lesson}) => (
  <div>

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

      <div className='flex flex-wrap'>
        {map(keys(actionByLessonState), (state, index) => {
          const stateUrl = lesson[`${state}_url`]
          return stateUrl
            ? <Request
                key={index}
                lazy
                method='post'
                url={stateUrl}
              >
                {({request}) => (
                  <div className='pa1'>
                    <Button onClick={() => request()}>
                      {actionByLessonState[state].title}
                    </Button>
                  </div>
                )}
              </Request>
            : null
        })}
      </div>
  </div>
)
