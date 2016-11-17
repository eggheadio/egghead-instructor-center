import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Title from '.'

storiesOf('Title', module)
  .add('default', () => (
    <Title>
      {lorem.words()}
    </Title>
  ))
