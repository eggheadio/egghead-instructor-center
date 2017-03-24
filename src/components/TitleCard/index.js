import React from 'react'
import {Heading, Paragraph, Card} from 'egghead-ui'

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
    <Card>
      {children}
    </Card>
  </section>
)
