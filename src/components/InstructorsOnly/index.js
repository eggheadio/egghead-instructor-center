import React from 'react'
import {Error} from 'egghead-ui'
import {instructorsOnlyDescriptionText} from 'utils/text'
import Main from 'components/Main'

export default () => (
  <Main>
    <Error>
      {instructorsOnlyDescriptionText}
    </Error>
  </Main>
)
