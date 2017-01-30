import React from 'react'

import {loadingTitleText} from 'utils/text'

import Icon from 'components/Icon'
import Main from 'components/Main'

export default () => (
  <Main>
    <div className='mv3 gray'>
      <Icon
        type='refresh'
        size='2'
        spin
        className='mr2'
      />
      {loadingTitleText}...
    </div>
  </Main>
)
