import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Main from '.'

storiesOf('Main', module)
  .add('default', () => (
    <Main>
      {lorem.paragraphs()}
    </Main>
  ))
