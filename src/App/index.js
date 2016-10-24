import React from 'react';

import { Provider } from 'react-redux';

import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

import Instructor from './screens/Instructor'
import GetPublished from './screens/GetPublished'

import configureStore from './utils/configureStore'
const store = configureStore();

const App = (props) => (
  <Provider store={store}>
    <Router>
      <div className='pa4 mw8 center'>
        <Match exactly pattern={`/`} component={GetPublished} />
        <Match pattern={`/instructors/:instructor_id`} component={Instructor} />
        <Miss render={() => (<h1>404!</h1>)} />
      </div>
    </Router>
  </Provider>
);

export default App
