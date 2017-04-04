import React from 'react'
import {map, keys} from 'lodash'
import {Maybe, Button} from 'egghead-ui'
import {lessonStateVerbToPastTense, detailsByLessonState} from 'utils/lessonStates'
import WrappedRequest from 'components/WrappedRequest'

const stateVerbs = keys(lessonStateVerbToPastTense)

export default ({lesson, onLessonStateChange}) => (
  <div className='flex flex-wrap'>
    {map(stateVerbs, (stateVerb, index) => {
      const stateVerbUrl = lesson[`${stateVerb}_url`]
      return (
        <Maybe 
          key={stateVerb}
          condition={Boolean(stateVerbUrl)}
        >
          <WrappedRequest
            lazy
            method='post'
            url={stateVerbUrl}
            onResponse={onLessonStateChange}
          >
            {({request}) => (
              <div className='pr2 pb2'>
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
        </Maybe>
      )
    })}
  </div>
)
