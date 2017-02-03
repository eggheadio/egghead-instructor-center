import React from 'react'
import {instructorsOnlyDescriptionText} from 'utils/text'
import Main from 'components/Main'

export default () => (
  <Main>
    <Error>
      {instructorsOnlyDescriptionText}
    </Error>
  </Main>
)
