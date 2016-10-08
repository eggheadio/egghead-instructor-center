import React from 'react';

import { Provider } from 'react-redux';

import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

import configureStore from './utils/configureStore'

import Instructor from './screens/Instructor'

const NoMatch = () => <h1>404!</h1>

const store = configureStore();

const App = (props) => (
  <Provider store={store}>
    <Router>
      <div>
        <Match pattern={`/instructors/:instructor_id`} component={Instructor}/>
        <Miss component={NoMatch}/>
      </div>
    </Router>
  </Provider>
);

export default App
