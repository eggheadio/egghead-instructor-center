import React from 'react'
import {Heading} from 'egghead-ui'

export default ({label, count}) => (
  <div className='pv2 ph3 bg-light-gray br2 tc'>
    <Heading level='5'>
      {label}
    </Heading>
    <div className='gray f4'>
      {count}
    </div>
  </div>
)
