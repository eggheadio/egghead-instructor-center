import React from 'react'
import {map} from 'lodash'
import Anchor from 'components/Anchor'
import Button from 'components/Button'

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
          <Button subtle>
            {item.action}
          </Button>
        </Anchor>
      </div>
    ))}
  </div>
)
