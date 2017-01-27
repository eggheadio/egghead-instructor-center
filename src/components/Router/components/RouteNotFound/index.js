import React from 'react'
import {
  pageNotFoundTitleText,
  pageNotFoundDescriptionText,
  crackedEggoAltText,
} from '../../../../utils/text'
import Main from '../../../../components/Main'
import Split from '../../../../components/Split'
import Heading from '../../../../components/Heading'
import crackedEggo from './crackedEggo.png'

export default () => (
  <Main>
    <Split
      title='404'
      main={
        <img
          src={crackedEggo}
          alt={crackedEggoAltText}
        />
      }
      aside={
        <div>
          <Heading level='3'>
            {pageNotFoundTitleText}
          </Heading>
          <p>{pageNotFoundDescriptionText}</p>
        </div>
      }
    />
  </Main>
)
