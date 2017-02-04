import 'tachyons'
import 'font-awesome/css/font-awesome.min.css'
import React, {Component} from 'react'
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
} from 'utils/text'
import {guideUrl, chatUrl} from 'utils/urls'
import {login, logout} from 'utils/authentication'
import Request from 'components/Request'
import Main from 'components/Main'
import Overview from './screens/Overview'
import New from './screens/Lessons/screens/New'
import Lesson from './screens/Lessons/screens/Lesson'
import Instructors from './screens/Instructors'
import Navigation from './components/Navigation'
import InstructorsOnly from './components/InstructorsOnly'
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'

class App extends Component {

  state = {
    userUrl: false,
  }

  componentDidMount() {
    this.setState({
      userUrl: login(),
    })
  }

  render() {
    const {userUrl} = this.state

    if(!userUrl) {
      return <LoggedOut />
    }

    return (
      <Request url={userUrl}>
        {({data}) => {

          if(data && !data.instructor_url) {
            return <InstructorsOnly />
          }

          if (process.env.NODE_ENV === 'production') {
            initializeErrorTracking(data.id)
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
                        <Request url={data.instructor_url}>
                          {({data}) => (
                            <div>
                              <Overview instructor={data} />
                            </div>
                          )}
                        </Request>
                      )}
                    />

                    <Route 
                      exact
                      path='/lessons/new'
                      render={() => (
                        <Request url={data.instructor_url}>
                          {({data}) => (
                            <New instructor={data} />
                          )}
                        </Request>
                      )}
                    />

                    <Route 
                      path={`/lessons/:slug`}
                      render={({match}) => (
                        <Request url={`/api/v1/lessons/${match.params.slug}`}>
                          {({data}) => (
                            <Lesson lesson={data} />
                          )}
                        </Request>
                      )}
                    />

                    <Route 
                      path={`/instructors/:slug`}
                      render={({match}) => (
                        <Request url={`/api/v1/instructors/${match.params.slug}`}>
                          {({data}) => (
                            <Overview instructor={data} />
                          )}
                        </Request>
                      )}
                    />

                    <Route
                      path='/instructors'
                      render={() => (
                        <Request url='/api/v1/instructors'>
                          {({data}) => (
                            <Instructors instructors={data} />
                          )}
                        </Request>
                      )}
                    />

                    <Route component={RouteNotFound} />

                  </Switch>

                </Main>

              </div>
            </BrowserRouter>
          )
        }}
      </Request>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
