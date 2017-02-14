import React from 'react'
import {getLoginUrl, guideUrl} from 'utils/urls'
import {loginTitleText, guideTitleText} from 'utils/text'
import {EggoIcon, InstructorBanner} from 'components/Logo'
import Button from 'components/Button'
import Anchor from 'components/Anchor'
import Cover from './components/Cover'
import background from './background.jpg'

export default () => (
  <Cover image={background}>

    <div className='mb4'>
      <EggoIcon className='w4' />
    </div>

    <div className='mb5'>
      <InstructorBanner className='w-100 mw6' />
    </div>

    <div className='mb5'>
      <Anchor url={getLoginUrl()}>
        <Button>
          {loginTitleText}
        </Button>
      </Anchor>
    </div>

    <div>
      <Anchor
        url={guideUrl}
        type='prominent'
      >
        {guideTitleText}
      </Anchor>
    </div>

  </Cover>
)
