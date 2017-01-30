import 'rxjs'
import 'tachyons'
import 'font-awesome/css/font-awesome.min.css'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter, Match, Miss} from 'react-router'

import {initializeErrorTracking} from 'utils/errorTracking'
import {
  overviewTitleText,
  newLessonsTitleText,
  guideTitleText,
  chatTitleText,
  logOutTitleText,
} from 'utils/text'
import {guideUrl, chatUrl} from 'utils/urls'
import getUrlParameter from 'utils/getUrlParameter'
import removeQueryString from 'utils/removeQueryString'

import configureStore from 'state/'
import {startAddUser, startRemoveUser, startShowNotification, startFetchInstructor} from 'state/actions'

import Main from 'components/Main'
import Loading from 'components/Loading'

import Overview from './screens/Overview'
import New from './screens/Lessons/screens/New'
import Lesson from './screens/Lessons/screens/Lesson'
import Instructors from './screens/Instructors'

import Navigation from './components/Navigation'
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
    instructor: appScreen.instructor,
    lessonPage: appScreen.lessonPage,
  }),
  {
    startAddUser,
    startRemoveUser,
    startShowNotification,
    startFetchInstructor,
  }
)(class Routes extends Component {

  componentWillMount() {

    const {user, instructor, startAddUser} = this.props
    const token = getUrlParameter('jwt')

    if(!token && !user) {
      return (
        <Main>
          <LoggedOut />
        </Main>
      )
    }

    else if(token && !user) {
      removeQueryString()
      startAddUser(token)
      return (
        <Main>
          <Loading />
        </Main>
      )
    }

    else if(!instructor) {
      startFetchInstructor(user.instructor_id)
      return (
        <Main>
          <Loading />
        </Main>
      )
    }
  }

  render() {

    const {instructor, lessonPage} = this.props

    return (
      <BrowserRouter>
        <div>

          <Navigation
            items={[
              {
                text: overviewTitleText,
                action: '',
              },
              {
                text: newLessonsTitleText,
                action: '/new-lessons',
              },
              {
                text: guideTitleText,
                action: guideUrl,
              },
              {
                text: chatTitleText,
                action: chatUrl,
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
              pattern='/'
              render={() => (
                <Overview
                  instructor={instructor}
                  lessonPage={lessonPage}
                />
              )}
            />

            <Match 
              pattern={'/lessons/new'}
              render={() => (
                <New
                  instructor={instructor}
                  lessonPage={lessonPage}
                />
              )}
            />

            <Match 
              pattern={`/lessons/:lessonSlug`}
              render={() => (
                <Lesson />
              )}
            />

            <Match
              pattern='/instructors'
              render={() => (
                <Instructors />
              )}
            />

            <Miss component={RouteNotFound} />

          </Main>

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
