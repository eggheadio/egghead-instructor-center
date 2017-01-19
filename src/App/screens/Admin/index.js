import React from 'react'
import {Match} from 'react-router'
import {connect} from 'react-redux'
import {includes} from 'lodash'
import {forbiddenDescriptionText, forbiddenActionText} from '../../utils/text'
import adminSlugs from '../../utils/adminSlugs'
import {startRemoveUser, startShowNotification} from '../../state/actions'
import Main from '../../components/Main'
import Navigation from '../../components/Navigation'
import Overview from './screens/Overview'
import NewLessons from './screens/NewLessons'

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

      <Navigation
        pathname={pathname}
        items={[
          {
            text: 'Overview',
            action: '',
          },
          {
            text: 'New Lessons',
            action: '/new-lessons',
          },
          {
            text: 'Log out',
            action: startRemoveUser,
          },
        ]}
      />

      <Main>

        <Match 
          exactly
          pattern={pathname}
          render={() => (
            <Overview />
          )}
        />

        <Match 
          pattern={`${pathname}/new-lessons`}
          render={() => (
            <NewLessons />
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
