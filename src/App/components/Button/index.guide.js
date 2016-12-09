import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {lorem} from 'faker'
import Button from '.'

storiesOf('Button', module)
  .add('default', () => (
    <Button> 
      {lorem.words()}
    </Button>
  ))
