import React from 'react'
import {
  helpTitleText,
  guideDescriptionText,
  guideActionText,
  adminsDescriptionText,
  adminsActionText,
  instructorsChatDescriptionText,
  instructorsChatActionText,
} from 'utils/text'
import {guideUrl, chatUrl, instructorsChatUrl} from 'utils/urls'
import Widget from 'components/Widget'
import List from './components/List'

export default () => (
  <Widget title={helpTitleText}>
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
  </Widget>
)
