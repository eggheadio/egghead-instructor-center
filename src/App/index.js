import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './state/'
import Router from './components/Router'

const store = configureStore()

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
)
