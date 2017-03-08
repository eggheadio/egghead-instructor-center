import React from 'react'
import {map, keys} from 'lodash'
import {Button} from 'egghead-ui'
import {actionByLessonState, colorByLessonState, lessonStateVerbToPastTense} from 'utils/lessonStates'
import WrappedRequest from 'components/WrappedRequest'

export default ({lesson}) => (
  <div className='flex flex-wrap'>
    {map(keys(actionByLessonState), (state, index) => {
      const stateUrl = lesson[`${state}_url`]
      return stateUrl
        ? <WrappedRequest
            key={index}
            lazy
            method='post'
            url={stateUrl}
          >
            {({request}) => (
              <div className='pa1'>
                <Button
                  size='extra-small'
                  onClick={() => request()}
                  color={colorByLessonState[lessonStateVerbToPastTense[state]].color}
                >
                  {actionByLessonState[state].title}
                </Button>
              </div>
            )}
          </WrappedRequest>
        : null
    })}
  </div>
)
