import 'tachyons-egghead'
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
  lessonsTitleText,
} from 'utils/text'
import {guideUrl, chatUrl} from 'utils/urls'
import {login, logout} from 'utils/authentication'
import WrappedRequest from 'components/WrappedRequest'
import Main from 'components/Main'
import Instructor from './screens/Instructors/screens/Instructor'
import Lessons from './screens/Lessons'
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
    <WrappedRequest url={decodedToken.user_url}>
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
            <WrappedRequest url={data.instructor_url}>
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
                          text: lessonsTitleText,
                          action: '/lessons',
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
                            <Instructor instructor={instructor} />
                          )}
                        />

                        <Route 
                          path='/lessons/new'
                          render={() => (
                            <New instructor={instructor} />
                          )}
                        />

                        <Route 
                          path={`/lessons/:slug`}
                          render={({match}) => (
                            <WrappedRequest url={`/api/v1/lessons/${match.params.slug}`}>
                              {({data}) => (
                                <Lesson 
                                  instructor={instructor}
                                  lesson={data} 
                                />
                              )}
                            </WrappedRequest>
                          )}
                        />

                        <Route 
                          path='/lessons'
                          render={() => (
                            <Lessons instructor={instructor} />
                          )}
                        />

                        <Route 
                          path={`/instructors/:slug`}
                          render={({match}) => (
                            <WrappedRequest url={`/api/v1/instructors/${match.params.slug}`}>
                              {({data}) => (
                                <Instructor instructor={data} />
                              )}
                            </WrappedRequest>
                          )}
                        />

                        <Route
                          path='/instructors'
                          render={() => (
                            <WrappedRequest url='/api/v1/instructors'>
                              {({data}) => (
                                <Instructors instructors={data} />
                              )}
                            </WrappedRequest>
                          )}
                        />

                        <Route component={RouteNotFound} />

                      </Switch>

                    </Main>

                  </div>
                )
              }}
            </WrappedRequest>
          </BrowserRouter>
        )
      }}
    </WrappedRequest>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
