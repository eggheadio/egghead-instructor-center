import React from 'react'
import {Maybe, Heading, Paragraph, Card} from 'egghead-ui'

export default ({children, title, description = false}) => (
  <section className='br2 bg-white-secondary shadow-1'>
    <div className='pa4'>
      <Heading level='5'>
        {title}
      </Heading>
      <Maybe condition={Boolean(description)}>
        <Paragraph type='small'>
          {description}
        </Paragraph>
      </Maybe>
    </div>
    <Card>
      {children}
    </Card>
  </section>
)
