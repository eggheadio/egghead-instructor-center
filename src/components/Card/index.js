import React from 'react'
import {Heading, Paragraph} from 'egghead-ui'

export default ({children, title, description}) => (
  <section className='mb4'>
    {title
      ? <Heading level='4'>
          {title}
        </Heading>
      : null
    }
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
