import React from 'react'
import {map} from 'lodash'
import {Button, Paragraph} from 'egghead-ui'
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
import List from 'components/List'
import Anchor from 'components/Anchor'

const items=[
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
]

export default () => (
  <Widget title={helpTitleText}>
    <List items={map(items, (item, index) => (
      <div key={index}>
        <Paragraph>
          {item.description}
        </Paragraph>
        <Anchor url={item.url}>
          <Button color='blue' outline size='small'>
            {item.action}
          </Button>
        </Anchor>
      </div>
    ))} />
  </Widget>
)
