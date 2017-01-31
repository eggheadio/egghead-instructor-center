import React from 'react'
import {connect} from 'react-redux'
import {truncate, isFunction} from 'lodash'
import {Link} from 'react-router'
import {
  viewActionText,
  claimActionText,
  claimCompleteDescriptionText,
} from 'utils/text'
import {startShowNotification, startUpdateLessonState} from 'state/actions'
import Heading from 'components/Heading'
import Button from 'components/Button'

const LessonSummary = ({
  instructor,
  lesson,
  startShowNotification,
  startUpdateLessonState,
}) => {

  const lessonPath = `/lessons/${lesson.slug}`

  const actionForCurrentStates = {
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
          message: claimCompleteDescriptionText,
          action: {
            path: '/',
            description: viewActionText,
          },
        })
      }
    },
    claimed: {
      requiresUserAction: true,
      label: viewActionText,
      action: lessonPath,
    },
    rejected: {
      requiresUserAction: true,
      label: viewActionText,
      action: lessonPath,
    },
  }

  const actionForCurrentState = actionForCurrentStates[lesson.state] || {
    label: viewActionText,
    action: lessonPath,
  }

  const sharedButtonProps = {
    subtle: actionForCurrentState.requiresUserAction ? false : true,
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
        <div className={`
          mb2 ttu tc pa1 br2 ba f6 dib
          ${actionForCurrentState.requiresUserAction ? 'orange b--orange' : 'b--black-50'}
        `}>
          {lesson.state}
        </div>
        <div style={{
          wordBreak: 'break-word',
        }}>
          {lesson.summary
            ? truncate(lesson.summary, {length: 144})
            : '...'
          }
        </div>
        {actionForCurrentState
          ? <div className='mt2'>
              {isFunction(actionForCurrentState.action)
                ? <Button {...sharedButtonProps} onClick={actionForCurrentState.action}>
                    {actionForCurrentState.label}
                  </Button>
                : <Link to={actionForCurrentState.action}>
                    <Button {...sharedButtonProps}>
                      {actionForCurrentState.label}
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
  ({appScreen}) => ({
    instructor: appScreen.instructor,
  }),
  {startShowNotification, startUpdateLessonState}
)(LessonSummary)
