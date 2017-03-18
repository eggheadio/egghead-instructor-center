import Honeybadger from 'honeybadger-js'
import {honeybadgerKey} from 'utils/keys'

export const initializeErrorTracking = (userId) => {
  
  Honeybadger.configure({
    api_key: honeybadgerKey,
    onerror: false,
  })

  window.onerror = (message, url, line, column, error) => {
    Honeybadger.setContext({
      userId,
      precedingActions: JSON.parse(localStorage.getItem('precedingActions')),
    })
    Honeybadger.notify(error ? error : {
      name: message,
      message,
      stack: [message, '\n    at ? (', url || 'unknown', ':', line || 0, ':', column || 0, ')'].join(''),
    })
  }
}
