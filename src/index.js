import 'tachyons-egghead'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {initializeErrorTracking} from 'utils/errorTracking'
import {
  overviewTitleText,
  newLessonsTitleText,
  instructorsTitleText,
  guideTitleText,
  chatTitleText,
  logOutTitleText,
  queueTitleText,
} from 'utils/text'
import {temporaryQueueUrl, guideUrl, chatUrl} from 'utils/urls'
import {login, logout} from 'utils/authentication'
import InstructorCenterRequest from 'components/InstructorCenterRequest'
import Main from 'components/Main'
import Overview from './screens/Overview'
import New from './screens/Lessons/screens/New'
import Lesson from './screens/Lessons/screens/Lesson'
import Instructors from './screens/Instructors'
import Navigation from './components/Navigation'
import InstructorsOnly from './components/InstructorsOnly'
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'

const App = () => {

  const decodedToken = login()

  if(!decodedToken) {
    return <LoggedOut />
  }

  if(decodedToken && !decodedToken.user_url) {
    logout()
  }

  return (
    <InstructorCenterRequest url={decodedToken.user_url}>
      {({data}) => {

        const user = data

        if(user && !user.instructor_url) {
          return <InstructorsOnly />
        }

        if (process.env.NODE_ENV === 'production') {
          initializeErrorTracking(user.id)
        }

        return (
          <BrowserRouter>
            <InstructorCenterRequest url={data.instructor_url}>
              {({data}) => {

                const instructor = data

                return (
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
                          text: queueTitleText,
                          action: temporaryQueueUrl,
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
                          action: logout,
                        },
                      ]}
                    />

                    <Main>

                      <Switch>

                        <Route 
                          exact
                          path='/'
                          render={() => (
                            <Overview instructor={instructor} />
                          )}
                        />

                        <Route 
                          exact
                          path='/lessons/new'
                          render={() => (
                            <New instructor={instructor} />
                          )}
                        />

                        <Route 
                          path={`/lessons/:slug`}
                          render={({match}) => (
                            <InstructorCenterRequest url={`/api/v1/lessons/${match.params.slug}`}>
                              {({data}) => (
                                <Lesson 
                                  instructor={instructor}
                                  lesson={data} 
                                />
                              )}
                            </InstructorCenterRequest>
                          )}
                        />

                        <Route 
                          path={`/instructors/:slug`}
                          render={({match}) => (
                            <InstructorCenterRequest url={`/api/v1/instructors/${match.params.slug}`}>
                              {({data}) => (
                                <Overview instructor={data} />
                              )}
                            </InstructorCenterRequest>
                          )}
                        />

                        <Route
                          path='/instructors'
                          render={() => (
                            <InstructorCenterRequest url='/api/v1/instructors'>
                              {({data}) => (
                                <Instructors instructors={data} />
                              )}
                            </InstructorCenterRequest>
                          )}
                        />

                        <Route component={RouteNotFound} />

                      </Switch>

                    </Main>

                  </div>
                )
              }}
            </InstructorCenterRequest>
          </BrowserRouter>
        )
      }}
    </InstructorCenterRequest>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
