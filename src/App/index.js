import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './state/'
import Router from './components/Router'
import NotificationCenter from './components/NotificationCenter'

const store = configureStore()

export default (props) => (
  <Provider store={store}>
    <div>
      <Router />
      <NotificationCenter />
    </div>
  </Provider>
)
