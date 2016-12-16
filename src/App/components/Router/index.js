import React from 'react'
import {connect} from 'react-redux'
import {size} from 'lodash'
import {BrowserRouter, Match, Redirect, Miss} from 'react-router'
import Instructor from '../../screens/Instructor'
import Login from './components/Login'
import RouteNotFound from './components/RouteNotFound'
import NotificationCenter from './components/NotificationCenter'

const Router = ({user}) => (
  <BrowserRouter>
    <div>

      {size(user) > 0
        ? <div>

            <Match
              exactly
              pattern='/'
              render={() => (
                <Redirect to={`instructors/${user.id}`} />
              )}
            />

            <Match
              pattern='/instructors/:instructorId'
              component={Instructor}
            />

            <Miss component={RouteNotFound} />

          </div>

        : <Login />
      }

      <NotificationCenter />

    </div>
  </BrowserRouter>
)

export default connect(
  ({appScreen}) => ({
    user:  appScreen.user,
  }),
  null
)(Router)
