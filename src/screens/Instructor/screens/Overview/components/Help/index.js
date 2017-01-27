import React from 'react'
import {
  helpTitleText,
  guideDescriptionText,
  guideActionText,
  adminsDescriptionText,
  adminsActionText,
  instructorsChatDescriptionText,
  instructorsChatActionText,
} from '../../../../../../utils/text'
import {guideUrl, chatUrl, instructorsChatUrl} from '../../../../../../utils/urls'
import Heading from '../../../../../../components/Heading'
import List from './components/List'

export default () => (
  <div>

    <Heading level='2'>
      {helpTitleText}
    </Heading>

    <List items={[
      {
        description: guideDescriptionText,
        url: guideUrl,
        action: guideActionText,
      },
      {
        description: adminsDescriptionText,
        url: chatUrl,
        action: adminsActionText,
      },
      {
        description: instructorsChatDescriptionText,
        url: instructorsChatUrl,
        action: instructorsChatActionText,
      },
    ]} />

  </div>
)
