import React from 'react'
import {map} from 'lodash'
import {Button, Paragraph} from 'egghead-ui'
import Anchor from 'components/Anchor'

export default ({items}) => (
  <div>
    {map(items, (item, index) => (
      <div
        key={index}
        className='mb3'
      >
        <Paragraph>
          {item.description}
        </Paragraph>
        <Anchor url={item.url}>
          <Button color='blue' outline size='small'>
            {item.action}
          </Button>
        </Anchor>
      </div>
    ))}
  </div>
)
