import React from 'react'
import {nextMilestoneTitleText} from 'utils/text'
import {Heading} from 'egghead-ui'

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
