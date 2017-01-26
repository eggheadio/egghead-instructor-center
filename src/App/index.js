import React from 'react'
import {Provider} from 'react-redux'
import {initializeErrorTracking} from './utils/errorTracking'
import configureStore from './state/'
import Router from './components/Router'

const store = configureStore()

if (process.env.NODE_ENV === 'production') {
  initializeErrorTracking(store)
}

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
)
