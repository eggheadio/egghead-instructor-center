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

    <div className='mb5 tc center'>
      <a 
        href={getLoginUrl()}
        className='no-underline'
      >
        <Button 
          size='xlarge'
          overDark
        >
          Sign in via egghead
        </Button>
      </a>
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
