import React from 'react'
import {storiesOf} from '@kadira/storybook'
import faker from 'faker'
import Avatar from '.'

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar
      name={faker.name.firstName()}
      url={faker.image.avatar()}
    />
  ))
