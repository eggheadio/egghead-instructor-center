import React from 'react'
import Heading from '../../../../../../components/Heading'
import Anchor from '../../../../components/Anchor'

export default () => (
  <div>

    <Heading level='2'>
      Got questions? Feeling stuck?
    </Heading>

    <ul>
      <li>
        We've put together comprehensive how-tos covering a lot of the common issues that instructors encounter in <Anchor url='https://instructor.egghead.io'>The Instructor Guide</Anchor>. It's here to help you make great work that will resonate.
      </li>
      <li>
        Joel and Trevor can help with almost anything related to making egghead.io lessons. <Anchor url='https://eggheadio.slack.com/messages/egghead-instructors/'>Reach out any time in Slack</Anchor>.
      </li>
      <li>
        The <Anchor url='https://eggheadio.slack.com/messages/egghead-instructors/'>eggheadio-instructors Slack channel</Anchor> is available for instructors to chat and see each other's progress. Come join the fun!
      </li>
    </ul>

  </div>
)
