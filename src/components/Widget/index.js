import React from 'react'
import {Heading} from 'egghead-ui'

export default ({title, children}) => (
  <section className='mb4'>
    <Heading level='4'>
      {title}
    </Heading>
    <div className='bg-white shadow-1 br2'>
      {children}
    </div>
  </section>
)
