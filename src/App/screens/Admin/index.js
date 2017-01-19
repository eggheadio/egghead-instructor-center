import React from 'react'
import {Match, Link} from 'react-router'
import {connect} from 'react-redux'
import {includes} from 'lodash'
import {
  forbiddenDescriptionText,
  forbiddenActionText,
  instructorActionText,
  instructorPulseTitleText,
  newRequestedLessonsTitleText,
  logOutTitleText,
} from '../../utils/text'
import adminSlugs from '../../utils/adminSlugs'
import {startRemoveUser, startShowNotification} from '../../state/actions'
import Main from '../../components/Main'
import Navigation from '../../components/Navigation'
import Button from '../../components/Button'
import InstructorPulse from './screens/InstructorPulse'
import NewRequestedLessons from './screens/NewRequestedLessons'

const Admin = ({
  params,
  pathname,
  startRemoveUser,
  startShowNotification,
  startFetchInstructor,
  user,
  instructor,
}) => {

  const hasAccess = includes(adminSlugs, user.instructor_id)
  if(!hasAccess) {
    startShowNotification({
      type: 'error',
      message: forbiddenDescriptionText,
      action: {
        path: `/`,
        description: forbiddenActionText,
      },
    })
    return null
  }

  return (
    <div>

      <nav className='pa3 bg-light-blue flex justify-center'>
        <Link to={`/`}>
          <Button>
            {instructorActionText}
          </Button>
        </Link>
      </nav>

      <Navigation
        pathname={pathname}
        items={[
          {
            text: instructorPulseTitleText,
            action: '',
          },
          {
            text: newRequestedLessonsTitleText,
            action: '/requested-lessons',
          },
          {
            text: logOutTitleText,
            action: startRemoveUser,
          },
        ]}
      />

      <Main>

        <Match 
          exactly
          pattern={pathname}
          render={() => (
            <InstructorPulse />
          )}
        />

        <Match 
          pattern={`${pathname}/requested-lessons`}
          render={() => (
            <NewRequestedLessons />
          )}
        />

      </Main>

    </div>
  )
}

export default connect(
  ({appScreen}) => ({
    user: appScreen.user,
  }),
  {
    startRemoveUser,
    startShowNotification,
  }
)(Admin)
