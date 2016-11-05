import React from 'react'
import {storiesOf} from '@kadira/storybook'
import faker from 'faker'
import Split from '.'

storiesOf('Split', module)
  .add('default', () => (
    <Split
      title={faker.lorem.words()}
      main={faker.lorem.text()}
      aside={faker.lorem.text()}
    />
  ))
