import {configure} from '@kadira/storybook'
import 'font-awesome/css/font-awesome.min.css'
import 'tachyons'

const req = require.context('../src/App/', true, /.guide.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
