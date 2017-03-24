import React from 'react'
import {Heading, Paragraph} from 'egghead-ui'
import Main from 'components/Main'
import crackedEggo from './crackedEggo.png'

export default () => (
  <Main>
    <Heading level='1'>
      404
    </Heading>
    <img
      src={crackedEggo}
      alt='Cracked eggo logo'
    />
    <Heading level='3'>
      {pageNotFoundTitleText}
    </Heading>
    <Paragraph>
      {pageNotFoundDescriptionText}
    </Paragraph>
  </Main>
)
