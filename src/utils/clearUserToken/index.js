import {windowMock} from 'egghead-ui'

const universalWindow = typeof(window) === 'undefined' 
  ? windowMock 
  : window

const clearUserToken = () => {
  universalWindow.localStorage.removeItem('token')
}

export default clearUserToken