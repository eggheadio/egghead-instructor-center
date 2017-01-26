import React from 'react'
import {Provider} from 'react-redux'
import Honeybadger from 'honeybadger-js'
import {honeybadgerKey} from './utils/keys'
import configureStore from './state/'
import Router from './components/Router'

const store = configureStore()

Honeybadger.configure({
  api_key: honeybadgerKey,
  onerror: false,
})

window.onerror = (message, url, line, column, error) => {
  const instructorId = store.getState().appScreen.user.instructor_id
  Honeybadger.setContext({
    instructorId,
  })
  Honeybadger.notify(error ? error : {
    name: 'window.onerror',
    message,
    stack: [message, '\n    at ? (', url || 'unknown', ':', line || 0, ':', column || 0, ')'].join(''),
  })
}

if (process.env.NODE_ENV === 'production') {
}

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
)
