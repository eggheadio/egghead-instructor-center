import 'tachyons-egghead'
import React from 'react'
import ReactDOM from 'react-dom'
import Localization, {Text} from 'react-localize'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {initializeErrorTracking} from 'utils/errorTracking'
import localizationBundle from 'utils/localizationBundle'
import {guideUrl, chatUrl} from 'utils/urls'
import {login, logout} from 'utils/authentication'
import WrappedRequest from 'components/WrappedRequest'
import Main from 'components/Main'
import LoggedOut from './components/LoggedOut'
import InstructorsOnly from './components/InstructorsOnly'
import RouteNotFound from './components/RouteNotFound'
import Navigation from './components/Navigation'
import Dashboard from './screens/Dashboard'
import New from './screens/Lessons/screens/New'
import Lesson from './screens/Lessons/screens/Lesson'
import Lessons from './screens/Lessons'
import Instructor from './screens/Instructors/screens/Instructor'
import Instructors from './screens/Instructors'

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
            <Localization messages={localizationBundle}>

              <div className='flex'>

                <Navigation
                  user={user}
                  items={[
                    {
                      text: <Text message='navigation.dashboard' />,
                      action: '/',
                    },
                    {
                      text: <Text message='navigation.lessons' />,
                      action: '/lessons',
                    },
                    {
                      text: <Text message='navigation.instructors' />,
                      action: '/instructors',
                    },
                    {
                      text: <Text message='navigation.guide' />,
                      action: guideUrl,
                    },
                    {
                      text: <Text message='navigation.chat' />,
                      action: chatUrl,
                    },
                    {
                      text: <Text message='navigation.logout' />,
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
                              <Dashboard instructor={instructor} />
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
                              <WrappedRequest
                                url={`/api/v1/lessons/${match.params.slug}`}
                                subscribe
                              >
                                {({request, data}) => (
                                  <Lesson 
                                    instructor={instructor}
                                    lesson={data} 
                                    requestLesson={request}
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

            </Localization>
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
