import React from 'react'
import {map} from 'lodash'
import {Button, Paragraph} from 'egghead-ui'
import {
  helpTitleText,
  helpDescriptionText,
  guideDescriptionText,
  guideActionText,
  adminsDescriptionText,
  adminsActionText,
  instructorsChatDescriptionText,
  instructorsChatActionText,
} from 'utils/text'
import {guideUrl, chatUrl, instructorsChatUrl} from 'utils/urls'
import Card from 'components/Card'
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

export default ({publishedLessons}) => publishedLessons === 0
  ? <Card
      title={helpTitleText}
      description={helpDescriptionText}
    >
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
    </Card>
  : null
