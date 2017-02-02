import 'rxjs'
import 'tachyons'
import 'font-awesome/css/font-awesome.min.css'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
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
import {startAddUser, startRemoveUser} from 'state/actions'
import Request from 'components/Request'
import Main from 'components/Main'
import Overview from './screens/Overview'
import New from './screens/Lessons/screens/New'
import Lesson from './screens/Lessons/screens/Lesson'
import Instructors from './screens/Instructors'
import Navigation from './components/Navigation'
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'

const store = configureStore()

if (process.env.NODE_ENV === 'production') {
  initializeErrorTracking(store)
}

const Routes = connect(
  ({appScreen}) => ({
    user: appScreen.user,
    lessonPage: appScreen.lessonPage,
  }),
  {
    startAddUser,
    startRemoveUser,
  }
)(class Routes extends Component {

  componentDidMount() {

    const {startAddUser} = this.props
    const token = getUrlParameter('jwt')

    if(token) {
      removeQueryString()
      startAddUser(token)
    }
  }

  render() {

    const {user, lessonPage} = this.props
    const token = getUrlParameter('jwt')

    if(!token && !user) {
      return <LoggedOut />
    }

    return (
      <BrowserRouter>
        <div>

          <Navigation
            items={[
              {
                text: overviewTitleText,
                action: '/',
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

            <Switch>

              <Route 
                exact
                path='/'
                render={() => (
                  <Request url={`/api/v1/instructors/${user.instructor_id}`}>
                    {({data}) => (
                      <Overview
                        instructor={data} 
                        lessonPage={lessonPage}
                      />
                    )}
                  </Request>
                )}
              />

              <Route 
                exact
                path='/lessons/new'
                render={() => (
                  <Request url={`/api/v1/instructors/${user.instructor_id}`}>
                    {({data}) => (
                      <New
                        instructor={data}
                        lessonPage={lessonPage}
                      />
                    )}
                  </Request>
                )}
              />

              <Route 
                path={`/lessons/:lessonSlug`}
                render={({match}) => (
                  <Lesson lessonSlug={match.params.lessonSlug} />
                )}
              />

              <Route 
                path={`/instructors/:instructorSlug`}
                render={({match}) => (
                  <Request url={`/api/v1/instructors/${match.params.instructorSlug}`}>
                    {({data}) => (
                      <Overview
                        instructor={data} 
                        lessonPage={lessonPage}
                      />
                    )}
                  </Request>
                )}
              />

              <Route
                path='/instructors'
                render={() => (
                  <Instructors />
                )}
              />

              <Route component={RouteNotFound} />

            </Switch>

          </Main>

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
