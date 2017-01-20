import React from 'react'
import {connect} from 'react-redux'
import {truncate, isFunction} from 'lodash'
import {Link} from 'react-router'
import {
  viewActionText,
  claimActionText,
  claimedDescriptionText,
  submitActionText,
  updateActionText,
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

  const lessonPath = `/instructors/${instructor.slug}/lessons/${lesson.slug}`

  const nextStepForCurrentStates = {
    accepted: {
      requiresUserAction: true,
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
      requiresUserAction: true,
      label: submitActionText,
      action: lessonPath,
    },
    rejected: {
      requiresUserAction: true,
      label: updateActionText,
      action: lessonPath,
    },
  }

  const nextStepForCurrentState = nextStepForCurrentStates[lesson.state] || {
    label: viewActionText,
    action: lessonPath,
  }

  const sharedButtonProps = {
    subtle: nextStepForCurrentState.requiresUserAction ? false : true,
  }

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
        <div style={{
          wordBreak: 'break-word',
        }}>
          {lesson.summary
            ? truncate(lesson.summary, {length: 144})
            : '...'
          }
        </div>
        {nextStepForCurrentState
          ? <div className='mt2'>
              {isFunction(nextStepForCurrentState.action)
                ? <Button {...sharedButtonProps} onClick={nextStepForCurrentState.action}>
                    {nextStepForCurrentState.label}
                  </Button>
                : <Link to={nextStepForCurrentState.action}>
                    <Button {...sharedButtonProps}>
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
