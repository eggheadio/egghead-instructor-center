import React from 'react'
import Main from '../../components/Main'
import Split from '../../components/Split'
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
          <h3 className='f3'>
            Page not found
          </h3>
          <p>Sorry, nothing can be found at this URL</p>
        </div>
      }
    />
  </Main>
)
