import React from 'react'
import {Heading, Paragraph} from 'egghead-ui'
import {Text} from 'react-localize'
import Main from 'components/Main'
import Image from 'components/Image'
import crackedEggo from './crackedEggo.png'

export default () => (
  <Main>
    <Heading level='1'>
      <Text message='routeNotFound.title' />
    </Heading>
    <Image
      src={crackedEggo}
      alt='Cracked eggo logo'
    />
    <Paragraph>
      <Text message='routeNotFound.description' />
    </Paragraph>
  </Main>
)
