import React from 'react'
import {map} from 'lodash'
import Anchor from 'components/Anchor'
import Image from 'components/Image'

export default ({count, label, graphics}) => (
  <div className='flex justify-center'>
    <div className='flex items-center'>
      <div className='base f3 b mr2'>
        {count}
      </div>
      <div>
        {label}
      </div>
    </div>
    <div>
      {map(graphics, graphic => (
        <Anchor 
          key={graphic.label}
          url={graphic.http_url}
        >
          <Image 
            src={graphic.logo_http_url}
            alt={graphic.label}
          />
        </Anchor>
      ))}
    </div>
  </div>
)
