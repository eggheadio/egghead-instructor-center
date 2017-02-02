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
import LoggedOut from './components/LoggedOut'
import RouteNotFound from './components/RouteNotFound'

export default class Routes extends Component {

  state = {
    user: false,
  }

  componentDidMount() {
    login(this.addUser)
  }

  addUser = (user) => {
    this.setState({user})
    if (process.env.NODE_ENV === 'production') {
      initializeErrorTracking(user.instructor_id)
    }
  }

  render() {

    const {user} = this.state
    const {lessonPage} = this.props

    if(!user) {
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
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)
