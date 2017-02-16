import React from 'react'
import {loadingTitleText} from 'utils/text'
import {Icon} from 'egghead-ui'

export default () => (
  <div className='ma4 white'>
    <Icon
      type='refresh'
      size='2'
      spin
      className='mr2'
    />
    {loadingTitleText}...
  </div>
)
