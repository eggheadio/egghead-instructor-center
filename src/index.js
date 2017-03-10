import 'tachyons-egghead'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {initializeErrorTracking} from 'utils/errorTracking'
import {
  overviewTitleText,
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
            <div className='flex'>

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

                <WrappedRequest url={data.instructor_url}>
                  {({data}) => {
                    const instructor = data
                    return (
                      <Switch>

                        <Route 
                          exact
                          path='/'
                          render={() => (
                            <Instructor instructor={instructor} />
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
                            <Instructors instructors={data} />
                          )}
                        />

                        <Route component={RouteNotFound} />

                      </Switch>

                    )
                  }}
                </WrappedRequest>
              </Main>

            </div>
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
