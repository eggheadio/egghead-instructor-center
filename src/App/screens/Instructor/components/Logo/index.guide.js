import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Logo from './index'

storiesOf('Logo', module)
  .add('Default', () => (
    <Logo />
  ))
