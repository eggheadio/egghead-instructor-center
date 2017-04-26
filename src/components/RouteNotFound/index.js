import React from 'react'
import {Heading, Paragraph, Image} from 'egghead-ui'
import Main from 'components/Main'
import crackedEggo from './crackedEggo.png'

export default () => (
  <Main>
    <Heading level='1'>
      404 - page not found
    </Heading>
    <Image
      src={crackedEggo}
      alt='Cracked eggo logo'
    />
    <Paragraph>
      This page doesn't exist.
    </Paragraph>
  </Main>
)
