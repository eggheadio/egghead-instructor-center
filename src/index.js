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
  instructorsTitleText,
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

  componentDidMount() {

    const {user, instructor, startAddUser, startFetchInstructor} = this.props
    const token = getUrlParameter('jwt')

    if(token) {
      removeQueryString()
      startAddUser(token)
    }

    if (user && !instructor) {
      startFetchInstructor(user.instructor_id)
    }
  }

  render() {

    const {user, instructor, lessonPage} = this.props
    const token = getUrlParameter('jwt')

    if(!token && !user) {
      return <LoggedOut />
    }

    if(!user || !instructor) {
      return <Loading />
    }

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
                action: '/lessons/new',
              },
              {
                text: instructorsTitleText,
                action: '/instructors',
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
              render={({params}) => (
                <Lesson lessonSlug={params.lessonSlug} />
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
