import React from 'react'
import {Provider} from 'react-redux'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import isPlainObject from 'lodash/isPlainObject'
import configureStore from './state/'
import Instructor from './screens/Instructor'
import Login from './screens/Login'
import RouteNotFound from './screens/RouteNotFound'
import Miss404 from './components/Miss404'

const store = configureStore()

// TODO: Move to login API response
const user = {
  id: 27,
  role: 'instructor',
}

const roleLandingRoutes = {
  'instructor': '/instructors'
}

const App = (props) => (
  <Provider store={store}>
    <Router>
      <div>
        <Match
          exactly
          pattern='/'
          render={() => (
            isPlainObject(user)
              ? <Redirect to={`${roleLandingRoutes[user.role]}/${user.id}`} />
              : <Redirect to='/login' />
          )}
        />
        <Match
          pattern={`/instructors/:instructor_id`}
          component={Instructor}
        />
        <Match
          pattern='/login'
          component={Login}
        />
        <Match
          pattern='/404'
          component={RouteNotFound}
        />
        <Miss404 />
      </div>
    </Router>
  </Provider>
)

export default App
