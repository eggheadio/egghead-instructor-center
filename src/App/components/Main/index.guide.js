import React from 'react'
import {storiesOf} from '@kadira/storybook'
import faker from 'faker'
import Main from '.'

storiesOf('Main', module)
  .add('default', () => (
    <Main>
      {faker.lorem.paragraphs()}
    </Main>
  ))
