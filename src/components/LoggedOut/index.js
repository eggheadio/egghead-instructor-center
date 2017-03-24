import React from 'react'
import {Button} from 'egghead-ui'
import {getLoginUrl, guideUrl} from 'utils/urls'
import {Text} from 'react-localize'
import {EggoIcon, InstructorBanner} from 'components/Logo'
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
          <Text message='login' />
        </Button>
      </Anchor>
    </div>

    <div>
      <Anchor
        url={guideUrl}
        type='prominent'
      >
        <Text message='instructorGuide' />
      </Anchor>
    </div>

  </Cover>
)
