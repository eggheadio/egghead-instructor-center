import React from 'react'
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
          alt='egghead.io page not found logo'
        />
      }
      aside={
        <div>
          <Heading level='3'>
            Page not found
          </Heading>
          <p>Sorry, nothing can be found at this URL</p>
        </div>
      }
    />
  </Main>
)
