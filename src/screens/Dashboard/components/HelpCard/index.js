import React from 'react'
import {map} from 'lodash'
import {Button, Paragraph, List} from 'egghead-ui'
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
import TitleCard from 'components/TitleCard'
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
  ? <TitleCard
      title={helpTitleText}
      description={helpDescriptionText}
    >
      <List items={map(items, (item, index) => (
        <div key={index}>
          <Paragraph>
            {item.description}
          </Paragraph>
          <Anchor url={item.url}>
            <Button color='green' outline size='small'>
              {item.action}
            </Button>
          </Anchor>
        </div>
      ))} />
    </TitleCard>
  : null
