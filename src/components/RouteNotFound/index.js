import React from 'react'
import {Heading} from 'egghead-ui'
import {
  pageNotFoundTitleText,
  pageNotFoundDescriptionText,
  crackedEggoAltText,
} from 'utils/text'
import Main from 'components/Main'
import Screen from 'components/Screen'
import crackedEggo from './crackedEggo.png'

export default () => (
  <Main>
    <Screen
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
