import {combineReducers} from 'redux';

import instructorScreen from '../screens/Instructor/reducers'

// up top we are combining all of the modules that compose the application
// with each "screen" getting a tree in the overall state model
export default combineReducers({
  instructorScreen
});