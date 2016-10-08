import React from 'react';
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

import Instructor from './screens/Instructor'

const NoMatch = () => <h1>404!</h1>

const App = (props) => (
  <Router>
    <div>
      <Match pattern={`/instructors/:instructor_id`} component={Instructor}/>
      <Miss component={NoMatch}/>
    </div>
  </Router>
);

export default App
