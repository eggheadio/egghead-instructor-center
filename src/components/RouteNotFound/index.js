import React from 'react'
import {Heading, Paragraph} from 'egghead-ui'
import {Text} from 'react-localize'
import Main from 'components/Main'
import crackedEggo from './crackedEggo.png'

export default () => (
  <Main>
    <Heading level='1'>
      <Text message='routeNotFound.title' />
    </Heading>
    <img
      src={crackedEggo}
      alt='Cracked eggo logo'
    />
    <Paragraph>
      <Text message='routeNotFound.description' />
    </Paragraph>
  </Main>
)
