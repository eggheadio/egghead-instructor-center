import {createStore, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'

import actionHistory from './utils/actionHistory'

import rootReducer from './rootReducer'
import rootEpic from './rootEpic'

const epicMiddleware = createEpicMiddleware(rootEpic)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => (
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      epicMiddleware,
      actionHistory
    ))
  )
)
