import React from 'react'
import {instructorsOnlyDescriptionText} from 'utils/text'
import Main from 'components/Main'
import {Error} from 'egghead-ui'

export default () => (
  <Main>
    <Error>
      {instructorsOnlyDescriptionText}
    </Error>
  </Main>
)
