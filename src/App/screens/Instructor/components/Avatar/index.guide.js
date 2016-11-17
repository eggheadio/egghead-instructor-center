import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {name, image} from 'faker'
import Avatar from '.'

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar
      name={name.firstName()}
      url={image.avatar()}
    />
  ))
