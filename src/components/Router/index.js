import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Match, Redirect, Miss} from 'react-router'
import {startAddUser} from 'state/actions'
import Instructor from 'screens/Instructor'
import Admin from 'screens/Admin'
import getUrlParameter from './utils/getUrlParameter'
import removeQueryString from './utils/removeQueryString'
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'
import NotificationCenter from './components/NotificationCenter'

export default connect(
  ({appScreen}) => ({
    user: appScreen.user,
  }),
  {startAddUser}
)(class Router extends Component {

  componentDidMount() {
    const {startAddUser, user} = this.props
    const token = getUrlParameter('jwt')
    if(token && !user) {
      removeQueryString()
      startAddUser(token)
    }
  }

  render() {
    const {user} = this.props
    const hasLoadedInstructor = user && user.is_instructor
    return (
      <BrowserRouter>
        <div>

          {hasLoadedInstructor
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

                <Match
                  pattern='/admin'
                  component={Admin}
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
})
