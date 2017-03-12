import React from 'react'
import {Heading, Paragraph} from 'egghead-ui'

export default ({children, title, description}) => (
  <section className='mb4'>
    <Heading level='4'>
      {title}
    </Heading>
    {description
      ? <Paragraph type='small'>
          {description}
        </Paragraph>
      : null
    }
    <div className='bg-white shadow-1 br2'>
      {children}
    </div>
  </section>
)
