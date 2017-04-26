import 'tachyons-egghead'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {
  login,
  logout,
  Request,
  InstructorDashboard,
  NewLesson,
  LessonDetails,
  LessonsDirectory,
  InstructorDetails,
  InstructorsDirectory,
} from 'egghead-ui'
import {initializeErrorTracking} from './utils/errorTracking'
import {guideUrl, chatUrl} from './utils/urls'
import Main from './components/Main'
import LoggedOut from './components/LoggedOut'
import InstructorsOnly from './components/InstructorsOnly'
import RouteNotFound from './components/RouteNotFound'
import Navigation from './components/Navigation'

const App = () => {

  const decodedToken = login()

  if(!decodedToken) {
    return (
      <LoggedOut />
    )
  }

  if(decodedToken && !decodedToken.user_url) {
    logout()
  }

  return (
    <Request url={decodedToken.user_url}>
      {({data}) => {

        const user = data

        if(user && !user.instructor_url) {
          return (
            <InstructorsOnly />
          )
        }
        if (process.env.NODE_ENV === 'production') {
          initializeErrorTracking(user)
        }

        return (
          <Request url={`${process.env.REACT_APP_EGGHEAD_BASE_URL}/api/v1`}>
            {({data}) => {
              const rootData = data

              return (
                <BrowserRouter>

                  <Request url={user.instructor_url}>
                    {({data}) => {
                      const instructor = data

                      return (

                        <div className='flex'>

                          <Navigation
                            instructor={instructor}
                            items={[
                              {
                                text: 'Dashboard',
                                action: '/',
                                iconType: 'home',
                              },
                              {
                                text: 'Lessons',
                                action: '/lessons',
                                iconType: 'list-ul',
                              },
                              {
                                text: 'Instructors',
                                action: '/instructors',
                                iconType: 'user',
                              },
                              {
                                text: 'Guide',
                                action: guideUrl,
                                iconType: 'question',
                              },
                              {
                                text: 'Chat',
                                action: chatUrl,
                                iconType: 'slack',
                              },
                              {
                                text: 'Log Out',
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
                                  <InstructorDashboard 
                                    instructor={instructor} 
                                    lessonsUrl={rootData.lessons_url}
                                    technologiesUrl={rootData.technologies_url}
                                  />
                                )}
                              />

                              <Route 
                                exact
                                path='/lessons/new'
                                render={() => (
                                  <NewLesson 
                                    instructor={instructor} 
                                    lessonsUrl={rootData.lessons_url}
                                    technologiesUrl={rootData.technologies_url}
                                  />
                                )}
                              />

                              <Route 
                                path={`/lessons/:slug`}
                                render={({match}) => (
                                  <Request
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
                                  </Request>
                                )}
                              />

                              <Route 
                                path='/lessons'
                                render={() => (
                                  <LessonsDirectory lessonsUrl={rootData.lessons_url} />
                                )}
                              />

                              <Route 
                                path={`/instructors/:slug`}
                                render={({match}) => (
                                  <Request url={`/api/v1/instructors/${match.params.slug}`}>
                                    {({data}) => (
                                      <InstructorDetails instructor={data} />
                                    )}
                                  </Request>
                                )}
                              />

                              <Route
                                path='/instructors'
                                render={() => (
                                  <InstructorsDirectory instructorsUrl={rootData.instructors_url} />
                                )}
                              />

                              <Route component={RouteNotFound} />

                            </Switch>

                          </Main>

                        </div>

                      )
                    }}
                  </Request>

                </BrowserRouter>
              )
            }}
          </Request>
        )
      }}
    </Request>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
