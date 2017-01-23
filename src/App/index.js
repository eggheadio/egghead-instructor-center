import React from 'react'
import {Provider} from 'react-redux'
import Honeybadger from 'honeybadger-js'
import configureStore from './state/'
import {honeybadgerKey} from './utils/keys'
import Router from './components/Router'

const store = configureStore()

if (process.env.NODE_ENV === 'production') {
  Honeybadger.configure({
    api_key: honeybadgerKey,
  })
}

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
)
