import React from 'react'
import {Heading, Paragraph, Card} from 'egghead-ui'

export default ({children, title, description}) => (
  <section className='br2 bg-white-secondary shadow-1'>
    <div className='pa4'>
      <Heading level='5'>
        {title}
      </Heading>
      {description
        ? <Paragraph type='small'>
            {description}
          </Paragraph>
        : null
      }
    </div>
    <Card>
      {children}
    </Card>
  </section>
)
