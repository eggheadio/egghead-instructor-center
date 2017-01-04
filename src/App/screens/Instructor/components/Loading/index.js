import React from 'react'
import Icon from '../Icon'

export default () => (
  <div>
    <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
    <Icon
      type='refresh'
      size='2'
      spin
      className='mr2'
    />
    Loading...
  </div>
)
