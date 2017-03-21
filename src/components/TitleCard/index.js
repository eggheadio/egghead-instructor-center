import React from 'react'
import {Heading, Paragraph, Card} from 'egghead-ui'

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
    <Card>
      {children}
    </Card>
  </section>
)
