import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Logo from '../App/components/Logo'

storiesOf('Logo', module)
  .add('Default', () => (
    <Logo />
  ))
