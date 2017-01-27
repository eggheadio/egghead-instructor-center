import React from 'react'
import {getLoginUrl, guideUrl} from 'utils/urls'
import {
  appTitleText,
  loginTitleText,
  loginDescriptionText,
  guideTitleText, 
  guideDescriptionText,
  guideActionText,
} from 'utils/text'
import Main from 'components/Main'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Anchor from 'components/Anchor'

export default () => (
  <Main>

    <div className='mb3'>
      <Heading level='2'>
        {guideTitleText}
      </Heading>

      <div className='mb3'>
        {guideDescriptionText}
      </div>

      <Anchor url={guideUrl}>
        <Button>
          {guideActionText}
        </Button>
      </Anchor>
    </div>

    <div>

      <Heading level='2'>
        {appTitleText}
      </Heading>

      <div className='mb3'>
        {loginDescriptionText}
      </div>

      <Anchor url={getLoginUrl()}>
        <Button>
          {loginTitleText}
        </Button>
      </Anchor>

    </div>

  </Main>
)
