import React from 'react'
import {connect} from 'react-redux'
import {truncate} from 'lodash'
import {addNotification} from '../../../../../../../../state/actions'
import {startUpdateLessonState} from '../../../../../../state/actions'
import Heading from '../../../../../../../../components/Heading'
import Button from '../../../../../../../../components/Button'

const LessonSummary = ({
  instructor,
  lesson,
  addNotification,
  startUpdateLessonState,
}) => {

  const nextStepForCurrentStates = {
    accepted: {
      label: 'Claim',
      action() {
        startUpdateLessonState({
          instructorId: instructor.slug,
          lesson,
          newState: 'claimed',
        })
        addNotification({
          type: 'info',
          message: 'Lesson topic claimed!',
          action: {
            path: '/',
            description: 'View',
          },
        })
      }
    },
  }

  const nextStepForCurrentState = nextStepForCurrentStates[lesson.state]

  return (
    <div className='flex-ns items-center'>

      <div className={`mr3 ${nextStepForCurrentState ? 'w-75' : ''}`}>
        <Heading level='5'>
          {lesson.title}
        </Heading>
        <div>
          {lesson.summary
            ? truncate(lesson.summary, {length: 144})
            : '...'
          }
        </div>
      </div>

      {nextStepForCurrentState
        ? <div className='w-25-ns mt3 mt0-ns'>
            <Button
              onClick={nextStepForCurrentState.action}
              className='w-100-ns'
            >
              {nextStepForCurrentState.label}
            </Button>
          </div>
        : null
      }

    </div>
  )
}

export default connect(
  ({instructorScreen}) => ({
    instructor: instructorScreen.instructor,
  }),
  {addNotification, startUpdateLessonState}
)(LessonSummary)
