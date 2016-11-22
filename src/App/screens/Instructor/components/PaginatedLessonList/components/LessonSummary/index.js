import React from 'react'
import {truncate} from 'lodash'
import Button from '../Button'

export default ({lesson}) => {

  const nextStepForCurrentStates = {
    accepted: {
      label: 'Claim',
      action: () => console.log('action'),
    },
  }

  const nextStepForCurrentState = nextStepForCurrentStates[lesson.state]

  return (
    <div className='flex-ns items-center'>

      <div className={`mr3 ${nextStepForCurrentState ? 'w-75' : ''}`}>
        <div className='f5 b mb2'>
          {lesson.title}
        </div>
        <div>
          {lesson.summary
            ? truncate(lesson.summary, {length: 144})
            : '...'
          }
        </div>
      </div>

      {nextStepForCurrentState
        ? <div className='w-25-ns mt3 mt0-ns'>
            <Button onClick={nextStepForCurrentState.action}>
              {nextStepForCurrentState.label}
            </Button>
          </div>
        : null
      }

    </div>
  )
}
