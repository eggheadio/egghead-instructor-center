import React from 'react'
import {Maybe, Heading, Paragraph, Card} from 'egghead-ui'

export default ({
  children, 
  title, 
  description = false, 
  intro = false,
  subtle = false,
}) => (
  <section className={`br2 ${subtle ? 'ba b--gray-secondary' : 'bg-white-secondary shadow-1'}`}>
    <div className='pa4'>
      <Heading level='5'>
        {title}
      </Heading>
      <Maybe condition={Boolean(description)}>
        <Paragraph type='small'>
          {description}
        </Paragraph>
      </Maybe>
      <Maybe condition={Boolean(intro)}>
        {intro}
      </Maybe>
    </div>
    {subtle
      ? <div className='bt b--gray-secondary'>
          {children}
        </div>
      : <Card>
          {children}
        </Card>
    }
  </section>
)
