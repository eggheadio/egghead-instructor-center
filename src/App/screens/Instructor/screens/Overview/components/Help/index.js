import React from 'react'
import {guideUrl, chatUrl} from '../../../../../../utils/urls'
import Heading from '../../../../../../components/Heading'
import Anchor from '../../../../../../components/Anchor'

export default () => (
  <div>

    <Heading level='2'>
      Got questions? Feeling stuck?
    </Heading>

    <ul>
      <li>
        We've put together comprehensive how-tos covering a lot of the common issues that instructors encounter in <Anchor url={guideUrl} isSeparateTab>The Instructor Guide</Anchor>. It's here to help you make great work that will resonate.
      </li>
      <li>
        Joel and Trevor can help with almost anything related to making egghead.io lessons. <Anchor url='https://eggheadio.slack.com/messages/egghead-instructors/' isSeparateTab>Reach out any time in Slack</Anchor>.
      </li>
      <li>
        The <Anchor url={chatUrl} isSeparateTab>eggheadio-instructors Slack channel</Anchor> is available for instructors to chat and see each other's progress. Come join the fun!
      </li>
    </ul>

  </div>
)
