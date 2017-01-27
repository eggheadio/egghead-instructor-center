import 'rxjs'
import 'tachyons'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {initializeErrorTracking} from './utils/errorTracking'
import configureStore from './state/'
import Router from './components/Router'

const store = configureStore()

if (process.env.NODE_ENV === 'production') {
  initializeErrorTracking(store)
}

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
