import Honeybadger from 'honeybadger-js'
import {honeybadgerKey} from './keys'

export const initializeErrorTracking = (store) => {
  
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
      name: message,
      message,
      stack: [message, '\n    at ? (', url || 'unknown', ':', line || 0, ':', column || 0, ')'].join(''),
    })
  }
}
