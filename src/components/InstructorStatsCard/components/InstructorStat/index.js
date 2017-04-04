import React from 'react'
import {map} from 'lodash'
import Anchor from 'components/Anchor'
import Image from 'components/Image'

export default ({count, label, graphics}) => (
  <div>
    <div className='flex items-center justify-center mb3'>
      <div className='base f3 b mr2'>
        {count}
      </div>
      <div>
        {label}
      </div>
    </div>
    <div className='flex flex-wrap justify-center'>
      {map(graphics, graphic => (
        <Anchor 
          key={graphic.name}
          url={graphic.http_url}
        >
          <Image 
            src={graphic.logo_http_url}
            alt={graphic.label}
            className='w2 mr3 mb3'
          />
        </Anchor>
      ))}
    </div>
  </div>
)
