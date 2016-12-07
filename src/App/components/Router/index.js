import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Match, Redirect} from 'react-router'
import {isPlainObject} from 'lodash'
import Instructor from '../../screens/Instructor'
import Login from '../../screens/Login'
import RouteNotFound from '../../screens/RouteNotFound'
import Miss404 from '../Miss404'

const roleLandingRoutes = {
  'instructor': '/instructors'
}

const Router = ({user}) => (
  console.log('user', user) ||
  <BrowserRouter>
    <div>
      <Match
        exactly
        pattern='/'
        render={() => (
          isPlainObject(user)
            ? <Redirect to={`${roleLandingRoutes[user.role]}/${user.id}`} />
            : <Redirect to='/login' />
        )}
      />
      <Match
        pattern={`/instructors/:instructorId`}
        component={Instructor}
      />
      <Match
        pattern='/login'
        component={Login}
      />
      <Match
        pattern='/404'
        component={RouteNotFound}
      />
      <Miss404 />
    </div>
  </BrowserRouter>
)

export default connect(
  ({appScreen}) => ({
    user: appScreen.user,
  }),
  null
)(Router)
