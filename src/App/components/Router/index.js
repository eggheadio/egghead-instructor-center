import React from 'react'
import {connect} from 'react-redux'
import {size} from 'lodash'
import {BrowserRouter, Match, Redirect, Miss} from 'react-router'
import {addUser} from '../../state/actions'
import Instructor from '../../screens/Instructor'
import getUrlParameter from './utils/getUrlParameter'
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'
import NotificationCenter from './components/NotificationCenter'

const Router = ({addUser, user}) => {
  const token = getUrlParameter('jwt')
  if(token) {
    addUser(token)
  }

  return (
    <BrowserRouter>
      <div>

        {size(user) > 0
          ? <div>

              <Match
                exactly
                pattern='/'
                render={() => (
                  <Redirect to={`instructors/${user.instructor_id}`} />
                )}
              />

              <Match
                pattern='/instructors/:instructorId'
                component={Instructor}
              />

              <Miss component={RouteNotFound} />

            </div>

          : <LoggedOut />
        }

        <NotificationCenter />

      </div>
    </BrowserRouter>
  )
}

export default connect(
  ({appScreen}) => ({
    user: appScreen.user,
  }),
  {addUser}
)(Router)
