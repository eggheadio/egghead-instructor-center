import React from 'react'
import {map} from 'lodash'
import Anchor from 'components/Anchor'
import {Button} from 'egghead-ui'

export default ({items}) => (
  <div>
    {map(items, (item, index) => (
      <div
        key={index}
        className='mb3'
      >
        <div className='mb2'>
          {item.description}
        </div>
        <Anchor url={item.url}>
          <Button outline size='small'>
            {item.action}
          </Button>
        </Anchor>
      </div>
    ))}
  </div>
)
