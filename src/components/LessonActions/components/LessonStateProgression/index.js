import React from 'react'
import {map, keys} from 'lodash'
import {Button} from 'egghead-ui'
import {lessonStateVerbToPastTense, detailsByLessonState} from 'utils/lessonStates'
import WrappedRequest from 'components/WrappedRequest'

export default ({lesson, onLessonStateChange}) => (
  <div className='flex flex-wrap'>
    {map(keys(lessonStateVerbToPastTense), (stateVerb, index) => {
      const stateVerbUrl = lesson[`${stateVerb}_url`]
      return stateVerbUrl
        ? <WrappedRequest
            key={index}
            lazy
            method='post'
            url={stateVerbUrl}
            onResponse={onLessonStateChange}
          >
            {({request}) => (
              <div className='pa1'>
                <Button
                  size='extra-small'
                  onClick={() => request()}
                  color={detailsByLessonState[lessonStateVerbToPastTense[stateVerb]].color}
                >
                  {detailsByLessonState[lessonStateVerbToPastTense[stateVerb]].action}
                </Button>
              </div>
            )}
          </WrappedRequest>
        : null
    })}
  </div>
)
