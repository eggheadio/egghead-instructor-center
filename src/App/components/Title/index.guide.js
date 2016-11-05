import React from 'react'
import {storiesOf} from '@kadira/storybook'
import faker from 'faker'
import Title from '.'

storiesOf('Title', module)
  .add('default', () => (
    <Title>
      {faker.lorem.words()}
    </Title>
  ))
