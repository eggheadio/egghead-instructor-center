import React from 'react'
import {map} from 'lodash'
import {Button, Paragraph, List} from 'egghead-ui'
import {Text} from 'react-localize'
import {guideUrl, chatUrl, instructorsChatUrl} from 'utils/urls'
import TitleCard from 'components/TitleCard'
import Anchor from 'components/Anchor'

const items=[
  {
    description: <Text message='help.guide.description' />,
    url: guideUrl,
    action: <Text message='help.guide.action' />,
  },
  {
    description: <Text message='help.admins.description' />,
    url: chatUrl,
    action: <Text message='help.admins.action' />,
  },
  {
    description: <Text message='help.chat.description' />,
    url: instructorsChatUrl,
    action: <Text message='help.chat.action' />,
  },
]

export default ({publishedLessons}) => publishedLessons === 0
  ? <TitleCard
      title={<Text message='help.title' />}
      description={<Text message='help.description' />}
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
