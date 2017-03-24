import React from 'react'
import {Text} from 'react-localize'
import {Error} from 'egghead-ui'
import Main from 'components/Main'

export default () => (
  <Main>
    <Error>
      <Text message='instructorsOnly' />
    </Error>
  </Main>
)
