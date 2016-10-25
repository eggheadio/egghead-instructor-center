import {createStore, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import rootReducer from './rootReducer'
import rootEpic from './rootEpic'

const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware
      )
    )
  )
}
