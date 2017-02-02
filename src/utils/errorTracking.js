import Honeybadger from 'honeybadger-js'
import {honeybadgerKey} from './keys'

export const initializeErrorTracking = (instructor_id) => {
  
  Honeybadger.configure({
    api_key: honeybadgerKey,
    onerror: false,
  })

  window.onerror = (message, url, line, column, error) => {
    Honeybadger.setContext({
      instructor_id,
      precedingActions: JSON.parse(localStorage.getItem('precedingActions')),
    })
    Honeybadger.notify(error ? error : {
      name: message,
      message,
      stack: [message, '\n    at ? (', url || 'unknown', ':', line || 0, ':', column || 0, ')'].join(''),
    })
  }
}
