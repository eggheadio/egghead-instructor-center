import 'tachyons-egghead'
import React from 'react'
import ReactDOM from 'react-dom'
import Localization, {Text} from 'react-localize'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {
  authentication,
  InstructorDashboard,
  NewLesson,
  LessonDetails,
  LessonsDirectory,
  InstructorDetails,
  InstructorsDirectory,
} from 'egghead-ui'
import {initializeErrorTracking} from './utils/errorTracking'
import localizationBundle from './utils/localizationBundle'
import {guideUrl, chatUrl} from './utils/urls'
import WrappedRequest from './components/WrappedRequest'
import Main from './components/Main'
import LoggedOut from './components/LoggedOut'
import InstructorsOnly from './components/InstructorsOnly'
import RouteNotFound from './components/RouteNotFound'
import Navigation from './components/Navigation'

const App = () => {

  const decodedToken = authentication.login()

  if(!decodedToken) {
    return (
      <Localization messages={localizationBundle}>
        <LoggedOut />
      </Localization>
    )
  }

  if(decodedToken && !decodedToken.user_url) {
    authentication.logout()
  }

  return (
    <WrappedRequest url={decodedToken.user_url}>
      {({data}) => {

        const user = data

        if(user && !user.instructor_url) {
          return (
            <Localization messages={localizationBundle}>
              <InstructorsOnly />
            </Localization>
          )
        }
        if (process.env.NODE_ENV === 'production') {
          initializeErrorTracking(user)
        }

        return (
          <BrowserRouter>
            <Localization messages={localizationBundle}>
              <WrappedRequest url={user.instructor_url}>
                {({data}) => {
                  const instructor = data
                  return (

                    <div className='flex'>

                      <Navigation
                        instructor={instructor}
                        items={[
                          {
                            text: <Text message='navigation.dashboard' />,
                            action: '/',
                            iconType: 'home',
                          },
                          {
                            text: <Text message='navigation.lessons' />,
                            action: '/lessons',
                            iconType: 'list-ul',
                          },
                          {
                            text: <Text message='navigation.instructors' />,
                            action: '/instructors',
                            iconType: 'user',
                          },
                          {
                            text: <Text message='navigation.guide' />,
                            action: guideUrl,
                            iconType: 'question',
                          },
                          {
                            text: <Text message='navigation.chat' />,
                            action: chatUrl,
                            iconType: 'slack',
                          },
                          {
                            text: <Text message='navigation.logout' />,
                            action: logout,
                            iconType: 'sign-out',
                          },
                        ]}
                      />

                      <Main>

                        <Switch>

                          <Route 
                            exact
                            path='/'
                            render={() => (
                              <InstructorDashboard instructor={instructor} />
                            )}
                          />

                          <Route 
                            exact
                            path='/lessons/new'
                            render={() => (
                              <NewLesson instructor={instructor} />
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
                                  <LessonDetails
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
                              <LessonsDirectory instructor={instructor} />
                            )}
                          />

                          <Route 
                            path={`/instructors/:slug`}
                            render={({match}) => (
                              <WrappedRequest url={`/api/v1/instructors/${match.params.slug}`}>
                                {({data}) => (
                                  <InstructorDetails instructor={data} />
                                )}
                              </WrappedRequest>
                            )}
                          />

                          <Route
                            path='/instructors'
                            render={() => (
                              <InstructorsDirectory />
                            )}
                          />

                          <Route component={RouteNotFound} />

                        </Switch>

                      </Main>

                    </div>

                  )
                }}
              </WrappedRequest>
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
