import 'rxjs'
import 'tachyons'
import 'font-awesome/css/font-awesome.min.css'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter, Match, Redirect, Miss, Link} from 'react-router'
import {compact, includes} from 'lodash'
import {initializeErrorTracking} from './utils/errorTracking'
import {
  adminActionText,
  getPublishedTitleText,
  overviewTitleText,
  newLessonsTitleText,
  guideTitleText,
  chatTitleText,
  logOutTitleText,
} from './utils/text'
import {guideUrl, chatUrl} from './utils/urls'
import adminSlugs from './utils/adminSlugs'
import getUrlParameter from './utils/getUrlParameter'
import removeQueryString from './utils/removeQueryString'
import configureStore from './state/'
import {startAddUser, startRemoveUser, startShowNotification, startFetchInstructor} from './state/actions'
import GetPublished from './screens/GetPublished'
import Overview from './screens/Overview'
import Lesson from './screens/Lesson'
import NewLessons from './screens/NewLessons'
import Admin from './screens/Admin'
import Main from './components/Main'
import Loading from './components/Loading'
import Navigation from './components/Navigation'
import Button from './components/Button'
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'
import NotificationCenter from './components/NotificationCenter'

const store = configureStore()

if (process.env.NODE_ENV === 'production') {
  initializeErrorTracking(store)
}

const Routes = connect(
  ({appScreen, instructorScreen}) => ({
    user: appScreen.user,
    instructor: instructorScreen.instructor,
    lessonPage: instructorScreen.lessonPage,
  }),
  {
    startAddUser,
    startRemoveUser,
    startShowNotification,
    startFetchInstructor,
  }
)(class Routes extends Component {

  componentDidMount() {

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

    const {user, instructor, lessonPage} = this.props
    const isAdmin = includes(adminSlugs, user.instructor_id)

    return (
      <BrowserRouter>
        <div>

          <Navigation
            items={compact([
              (instructor.published_lessons === 0)
                ? {
                    text: getPublishedTitleText,
                    action: '/get-published',
                  }
                : null,
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
            ])}
          />

          <Main>

            {isAdmin
              ? <nav className='pa3 bg-dark-gray flex justify-center'>
                  <Link to={`/admin`}>
                    <Button subtle>
                      {adminActionText}
                    </Button>
                  </Link>
                </nav>
              : null
            }

            <Match
              exactly
              pattern='/'
              render={() => (
                <Redirect to='/overview' />
              )}
            />

            <Match 
              pattern='/get-published'
              render={() => (
                <GetPublished 
                  instructor={instructor}
                  lessonPage={lessonPage}
                />
              )}
            />

            <Match
              pattern='/overview'
              render={() => (
                <Overview
                  instructor={instructor}
                  lessonPage={lessonPage}
                />
              )}
            />

            <Match 
              pattern={`/lessons/:lessonSlug`}
              component={Lesson}
            />

            <Match 
              pattern={'/new-lessons'}
              render={() => (
                <NewLessons
                  instructor={instructor}
                  lessonPage={lessonPage}
                />
              )}
            />

            <Match
              pattern='/admin'
              component={Admin}
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
