import { configure } from '@kadira/storybook';

import 'font-awesome/css/font-awesome.min.css'
import 'tachyons'
import '../src/index.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
