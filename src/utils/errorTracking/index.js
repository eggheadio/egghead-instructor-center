import Honeybadger from 'honeybadger-js'
import {honeybadgerKey} from 'utils/keys'

export const initializeErrorTracking = (user) => {
  
  Honeybadger.configure({
    api_key: honeybadgerKey,
    onerror: false,
  })

  window.onerror = (message, url, line, column, error) => {
    Honeybadger.setContext({
      name: user.name,
      email: user.email,
      userId: user.id,
      instructorUrl: user.instructor_url,
    })
    Honeybadger.notify(error ? error : {
      name: message,
      message,
      stack: [message, '\n    at ? (', url || 'unknown', ':', line || 0, ':', column || 0, ')'].join(''),
    })
  }
}
