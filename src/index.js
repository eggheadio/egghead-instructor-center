import 'rxjs'
import 'tachyons'
import 'font-awesome/css/font-awesome.min.css'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter, Match, Redirect, Miss} from 'react-router'
import {initializeErrorTracking} from './utils/errorTracking'
import getUrlParameter from './utils/getUrlParameter'
import removeQueryString from './utils/removeQueryString'
import configureStore from './state/'
import {startAddUser} from './state/actions'
import Instructor from './screens/Instructor'
import Admin from './screens/Admin'
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'
import NotificationCenter from './components/NotificationCenter'

const store = configureStore()

if (process.env.NODE_ENV === 'production') {
  initializeErrorTracking(store)
}

const Routes = connect(
  ({appScreen}) => ({
    user: appScreen.user,
  }),
  {startAddUser}
)(class Routes extends Component {

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

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
