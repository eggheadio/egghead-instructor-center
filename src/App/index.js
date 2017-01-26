import React from 'react'
import {Provider} from 'react-redux'
import trackErrors from './utils/trackErrors'
import configureStore from './state/'
import Router from './components/Router'

const store = configureStore()

if (process.env.NODE_ENV === 'production') {
  trackErrors(store)
}

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
)
