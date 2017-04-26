import React from 'react'
import {Button, Anchor} from 'egghead-ui'
import {getLoginUrl, guideUrl} from 'utils/urls'
import {EggoIcon, InstructorBanner} from 'components/Logo'
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
          Sign in via egghead
        </Button>
      </Anchor>
    </div>

    <div className='flex justify-center'>
      <Anchor
        url={guideUrl}
        type='prominent'
        color='white'
      >
        Instructor Guide
      </Anchor>
    </div>

  </Cover>
)
