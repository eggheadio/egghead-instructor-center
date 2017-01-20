import React from 'react'
import {connect} from 'react-redux'
import {truncate, isFunction} from 'lodash'
import {Link} from 'react-router'
import {
  viewActionText,
  claimActionText,
  claimedDescriptionText,
  submitActionText,
} from '../../../../../../../../utils/text'
import {startShowNotification, startUpdateLessonState} from '../../../../../../../../state/actions'
import Heading from '../../../../../../../../components/Heading'
import Button from '../../../../../../../../components/Button'

const LessonSummary = ({
  instructor,
  lesson,
  startShowNotification,
  startUpdateLessonState,
}) => {

  const nextStepForCurrentStates = {
    accepted: {
      label: claimActionText,
      action() {
        startUpdateLessonState({
          instructorId: instructor.id,
          lesson,
          newState: 'claimed',
        })
        startShowNotification({
          type: 'info',
          message: claimedDescriptionText,
          action: {
            path: '/',
            description: viewActionText,
          },
        })
      }
    },
    claimed: {
      label: submitActionText,
      action: `/lessons/${lesson.slug}`,
    },
  }

  const nextStepForCurrentState = nextStepForCurrentStates[lesson.state]

  return (
    <div className='flex items-start'>

      <img
        src={lesson.technology.logo_http_url}
        alt={lesson.technology.label}
        className='mw2 mr3'
      />

      <div>
        <Heading level='5'>
          {lesson.title}
        </Heading>
        <div>
          {lesson.summary
            ? truncate(lesson.summary, {length: 144})
            : '...'
          }
        </div>
        {nextStepForCurrentState
          ? <div className='mt2'>
              {isFunction(nextStepForCurrentState.action)
                ? <Button onClick={nextStepForCurrentState.action}>
                    {nextStepForCurrentState.label}
                  </Button>
                : <Link to={nextStepForCurrentState.action}>
                    <Button>
                      {nextStepForCurrentState.label}
                    </Button>
                  </Link>
              }
            </div>
          : null
        }
      </div>

    </div>
  )
}

export default connect(
  ({instructorScreen}) => ({
    instructor: instructorScreen.instructor,
  }),
  {startShowNotification, startUpdateLessonState}
)(LessonSummary)
