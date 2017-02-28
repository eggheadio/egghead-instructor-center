import React from 'react'
import {Heading} from 'egghead-ui'
import {nextMilestoneTitleText} from 'utils/text'

export default ({title, children}) => (
  <div className='mb5'>
    <Heading level='2'>
      {nextMilestoneTitleText}
    </Heading>
    <Heading level='3'>
      {title}
    </Heading>
    {children}
  </div>
)
