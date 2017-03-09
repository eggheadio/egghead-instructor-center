import React from 'react'
import {map} from 'lodash'
import {Button} from 'egghead-ui'
import Anchor from 'components/Anchor'

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
          <Button color='blue' outline size='small'>
            {item.action}
          </Button>
        </Anchor>
      </div>
    ))}
  </div>
)
